// Завдання 1
// Реалізуйте клас PrintMaсhine, який складається з:
// ■ розміру шрифту;
// ■ кольори шрифту;
// ■ сімейства шрифту;
// ■ методу print(), який приймає текст і друкує його відповідним шрифтом за допомогою document.write().
// Створіть об’єкт такого класу та продемонструйте роботу методу.

class PrintMaсhine {
   constructor(text, size, color, fontFamily){
   this.size = size
   this.color = color
   this.fontFamily = fontFamily
   this.text = text
   }
   print(){
      document.write(`<p style="font-size: ${this.size}px; font-family: ${this.fontFamily}, serif; color: ${this.color}">${this.text}</p>`)
   }
}

const newPrint = new PrintMaсhine(26, 'red', 'Roboto', 'Реалізуйте клас PrintMaсhine')
// newPrint.print()



// Завдання 2
// Реалізуйте клас, що описує новину (заголовок, текст, масив 
// тегів, дата публікації). У класі необхідно реалізувати один метод 
// print, який виводить всю інформацію у такому вигляді, як на 
// рисунку 1.
// Зверніть увагу, як виводиться дата:
// ■ якщо з дати публікації пройшло менше дня, то виводиться 
// «сьогодні»;
// ■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
// 2
// Практичне завдання 4
// ■ в інших випадках – повна дата у форматі «день.місяць.
// рік»

class News{
   
   constructor(title, text, tags, date) {
      this.title = title
      this.tags = tags
      this.date = date
      this.text = text
   }
   print(){
      // дата
      let diferenceData = ((new Date() - this.date) / 1000 / 3600).toFixed(2)

      let data
     if (diferenceData < 24) {
      data = 'Сьогодні'
     } else if (diferenceData > 24 && diferenceData < 24 * 7) {
      data = `${(diferenceData / 24).toFixed(0)} days ago`
     } else {
      data = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`
     }

      //теги
      let tag = this.tags.reduce((accum, elem) => {
         accum += `#${elem} `
         return accum},'')

      // вивід на сторінку
      document.write(`<p style="font-size: 18px"><b>${this.title}</b></p>
         <p style="font-size: 14px">${data}</p>
         <p>${this.text}</p>
         <p style="font-size: 14px">${tag}</p>`)

   }
}

const todayNews = new News('What is Lorem Ipsum?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, corrupti. Iste distinctio corporis similique dolor.', ['lorem', 'ipsum', 'text'], new Date(2023, 8 - 1, 22, 9, 2))
// todayNews.print()



// Завдання 3
// Реалізуйте клас, що описує стрічку новин. 
// Клас має містити:
// ■ масив новин;
// ■ get-властивість, яка повертає кількість новин;
// ■ метод виведення на екран усіх новин;
// ■ метод додавання новини;
// ■ метод видалення новини;
// ■ метод сортування новин за датою (від останніх новин до 
// старих);
// Продемонструйте роботу написаних методів


class stringOfNews {
   constructor(news){
      this.news = news
      // ■ get-властивість, яка повертає кількість новин;
      this.quantity = news.length
   }
   // ■ метод виведення на екран усіх новин;
   showNews(){
      
      this.news.forEach(element => {
         let month = ['January', 'February', 'Match', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

         let correctData = `${month[element.data.getMonth() - 1]} ${element.data.getDate()} ${element.data.getFullYear()}`
        document.write(`<p style="font-size: 12px; font-style: italic">${correctData}</p>
        <p style="margin-left: 15px">${element.text}</p>`)
      }); 
   }
   // ■ метод додавання новини;
   addNews(someNews, date){
      this.news = this.news.concat({text: someNews, data: date})
      return this.news
   }
   // ■ метод видалення новини;
   deleteNews(someNews){
      let deleteNew = []
      this.news.forEach(elem => {
         if (elem.text != someNews) deleteNew.push(elem)
      })
      this.news = [...deleteNew] // перезаписуємо масив з врахуванням видалених елементів
   return this.news
   }
// ■ метод сортування новин за датою (від останніх новин до старих);
   sortNews(){
      let newSortNews = [...this.news] // створюємо копію масива для сортування
      newSortNews.sort((a, b) => b.data - a.data)
      return newSortNews
}
}


const news1 = new stringOfNews([{text: 'First news',
data: new Date(2023, 11, 15, 9, 15, 35)}, {text: 'Second news', data: new Date(2019, 10, 9, 10, 10, 15)}, {text : 'Third news', data: new Date(2021, 5, 7, 11, 11, 20)}])
news1.showNews()
news1.deleteNews('Second news')
news1.addNews('Some new news', new Date(2020, 4, 7, 10, 10))
// console.log(news1);
// news1.showNews()
console.log(news1.quantity); //3
// news1.sortNews()
// console.log(news1);
console.log(news1.sortNews());
