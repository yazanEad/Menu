
let parg = document.querySelectorAll(".food div p")
let lest = document.querySelectorAll(".food div p a")

let food_menu = document.querySelector(".food_menu")




lest.forEach(function(e){
    
    e.addEventListener('click' , function(ele){
        // ele.preventDefault();
        // window.open("../html/Menu.html");
        window.localStorage.setItem('packed', e.dataset.food)
        
    } ) 
    
})

// window.localStorage.clear()

        console.log(window.localStorage.getItem('packed'))

let yazan = new XMLHttpRequest()
yazan.open("GET" ,"./menu.json")
yazan.send()
yazan.onreadystatechange = function(){
    if (this.readyState == 4 && this.status==200) {
        let menuJson = JSON.parse(this.responseText);
        console.log(menuJson.menu.sections)
        menuJson.menu.sections.forEach(function(e){
            // console.log(e.section_name)
            if(window.localStorage.getItem('packed') == e.section_name){
                console.log(e.dishes)
                menuFood(e.dishes , e.section_name)
            }
        })
        // let menuTitle = menuJson.menu[window.localStorage.getItem('packed')]
        // menuFood(menuTitle)
        // console.log(menuTitle)
    }
}




function menuFood(menuTitle , section_name){
    let food_menu = document.querySelector(".food_menu")
    let title_menu = document.querySelector(".title_menu h1")
    title_menu.innerHTML = section_name
    menuTitle.forEach(function(ele){
        let div = document.createElement("div")
        div.classList.add("meal")

        let img = document.createElement("img")
        
        let div1 = document.createElement("div")
        div1.classList.add("name")
        let h3 = document.createElement("h3")
        let p1 = document.createElement("p")
        h3.innerHTML = ele.dish_name
        p1.innerHTML = ele.description
        div1.appendChild(h3)
        div1.appendChild(p1)

        let p = document.createElement("p")
        p.classList.add("price")

        img.src = ele.image
        h3.innerHTML = ele.dish_name
        p.innerHTML= `${ele.price} شيكل`
        

        div.appendChild(img)
        div.appendChild(div1)
        div.appendChild(p)

        console.log(div)
        food_menu.appendChild(div)
    })
}




