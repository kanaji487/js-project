const menu = [
    {
      id: 1,
      title: "Brazil",
      category: "breakfast",
      price: 15.99,
      img: "./images/item 1.webp",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "China",
      category: "lunch",
      price: 13.99,
      img: "./images/item 2.webp",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Cuba",
      category: "shakes",
      price: 6.99,
      img: "./images/item 3.webp",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Egypt",
      category: "breakfast",
      price: 20.99,
      img: "./images/item 4.webp",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Estonia",
      category: "lunch",
      price: 22.99,
      img: "./images/item 5.webp",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Iceland",
      category: "shakes",
      price: 18.99,
      img: "./images/item 6.webp",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Nepal",
        category: "shakes",
        price: 18.99,
        img: "./images/item 7.webp",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 8,
        title: "Panama",
        category: "shakes",
        price: 18.99,
        img: "./images/item 8.webp",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
  ];
  
  const sectionCenter = document.querySelector(".section-center");

  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  });