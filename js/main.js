
function dragItems() {
  const listItems = document.querySelectorAll(".item__img");
  const graphic = document.querySelector(".graphic");
  let itemSrc = null;
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i]) {
      listItems[i].addEventListener('dragstart', (event) => {
        itemSrc = event.target.src;
        graphic.classList.add("drag");
      });
    }
  }
  graphic.addEventListener('drop', (event) => {
    const imgGraphic = document.querySelector(".graphic img");
    if (imgGraphic) {
      imgGraphic.remove();
    }
    const img = document.createElement('img');
    img.src = itemSrc;
    graphic.appendChild(img);
  })
  graphic.addEventListener('dragover', (event) => {
    event.preventDefault();
    graphic.classList.remove("drag");
  })
}

function addItems(URLItem) {
  const item = document.createElement('div');
  item.classList.add('item');
  const imgItem = document.createElement('img');
  imgItem.src = URLItem;
  imgItem.classList.add('item__img');
  item.appendChild(imgItem);
  const leftContainer = document.querySelector(".left");
  leftContainer.appendChild(item);
}

//main
(() => {
  const listURLItems = ['./assets/img/img1.png',
    './assets/img/img2.png',
    './assets/img/img3.png',
    './assets/img/img4.png',
  ];
  for (let URLItem of listURLItems) {
    addItems(URLItem);
  }
  dragItems();
})()