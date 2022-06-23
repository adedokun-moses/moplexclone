
//Route Component

const app = Vue.createApp({
    //data, functions, component templates
    // template: '<h2>I am a template </h2>'
    data() {
        return {
            url: "https://www.koboinfo.com",
            showBooks: true,
            /*  title: 'The final empire',
             author: 'Moses',
             age: 26,
             x: 0,
             y: 0 */
            
            books: [
                { title: "My First Book", author: "Mike", img: "image1.png", isfav: true },
                { title: "My Second Book", author: "Mike",  img: "image2.png", isfav: false },
                { title: "My Third Book", author: "Mike",  img: "image1.png", isfav: true   }
            ]
        }
    },

    methods: {
        /*    changeTitle(title){
            // this.title = "My new title"
            this.title = title
           } */

        toggleshow() {
            this.showBooks = !this.showBooks

        },

        handleevent(e, datas) {
            console.log(e, e.type)
            if (datas) (
                console.log(datas)
            )
        },

        handlemousemove(e) {
            //  console.log("Mouse Moved")
            this.x = e.offsetX
            this.y = e.offsetY

        },

        changecolor(book){
           book.isfav = !book.isfav
        }
    },

    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isfav)
        }
    
    }
  


})


app.mount('#app')