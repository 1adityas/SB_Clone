const initial_lis = [
    {
      id: 1,
      title: "Caffe Americano",
      category: "1",
      img: "./img/id1.png" ,
    },
    {
        id: 1,
        title: "Bonde Roast",
        category: "1",
        img: "./img/id11.png" ,
      },
      {
        id: 1,
        title: "Caffe Misto",
        category: "1",
        img: "./img/id111.png" ,
      },
      {
        id: 1,
        title: "Decaf Pike Place® Roast",
        category: "1",
        img: "./img/id1111.png" ,
      },
      {
        id: 1,
        title: "Pike Place®",
        category: "1",
        img: "./img/id11111.png" ,
      }]
const lis = [
    {
      id: 1,
      title: "Caffe Americano",
      category: "1",
      img: "./img/id1.png" ,
    },
    {
        id: 1,
        title: "Bonde Roast",
        category: "1",
        img: "./img/id11.png" ,
      },
      {
        id: 1,
        title: "Caffe Misto",
        category: "1",
        img: "./img/id111.png" ,
      },
      {
        id: 1,
        title: "Decaf Pike Place® Roast",
        category: "1",
        img: "./img/id1111.png" ,
      },
      {
        id: 1,
        title: "Pike Place®",
        category: "1",
        img: "./img/id11111.png" ,
      },
      {
        id: 2,
        title: "Chai Tea Let®",
        category: "2",
        img: "./img/id2.png" ,
      },
      {
        id: 2,
        title: "Chat Tea®",
        category: "2",
        img: "./img/id22.png" ,
      },
      {
        id: 2,
        title: "Caramel Apple Spice",
        category: "2",
        img: "./img/id222.png" ,
      },

      {
        id: 2,
        title: "Royal English Breakfast ",
        category: "2",
        img: "./img/id2222.png" ,
      },
      {
        id: 3,
        title: "Pumpkin Spice Frappuccino® Blended Beveragex",
        category: "3",
        img: "./img/id3.png" ,
      },
      {
        id: 3,
        title: "Frappuccino® Blended Beverage",
        category: "3",
        img: "./img/id33.png" ,
      },
      {
        id: 3,
        title: "Hot Chocolate®",
        category: "3",
        img: "./img/id2222.png" ,
      },

      {
        id: 4,
        title: "Pumpkin Cream Cold Brew®",
        category: "4",
        img: "./img/id4.png" ,
      },
      {
        id: 4,
        title: "Salted Caramel Cream Cold Brew",
        category: "4",
        img: "./img/id44.png" ,
      },
      {
        id: 4,
        title: "Starbucks Reserve® Cold Brew®",
        category: "4",
        img: "./img/id444.png" ,
      },

  ];

  const arr=["","Hot Coffees","Hot Drinks","Frappuccino® Blended Beverages","Cold Coffees","Iced Teas","Cold Drinks","Hot Breakfast","Bakery","Lunch","Snacks & Sweets"]
  // get parent element
  const sectionCenter = document.querySelector(".menu");
   const btnContainer = document.querySelectorAll("li a");

  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(initial_lis);
    document.getElementById("p2").innerHTML = "Hot Coffees";
    document.getElementById("p3").innerHTML = "Hot Coffees";
    // displayMenuButtons();
  });


  btnContainer.forEach(function(b){
    b.addEventListener('click',function(e){

        console.log(e.currentTarget.dataset.id);
        const idd=(e.currentTarget.dataset.id);
        //here is if i do idd=idd%5 its not working.

        document.getElementById("p2").innerHTML = arr[idd];
        document.getElementById("p3").innerHTML = arr[idd];
        const menuCategory=lis.filter(function(mi){

        if (mi.id.toString()=== idd)
        return mi;

        });
        diplayMenuItems(menuCategory);
    
    })

  })
  

  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
                <h4>${item.title}</h4>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
