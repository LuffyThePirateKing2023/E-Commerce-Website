//image slider on wrapper2 functionality

const previewImage = document.getElementById('product-design');
const closeIcon = document.getElementById('closeIcon');

let Wrapper2 = document.getElementById('wrapper2');

previewImage.addEventListener('click',() => {
    if(window.innerWidth <= 900){
      Wrapper2.style.display = "none";
    }
    else{
      Wrapper2.style.display = "block";
    }
});
// if(window.innerWidth > 900){
//   previewImage.addEventListener('click', function(){
//       Wrapper2.style.display = "block";
//   })
// }

closeIcon.addEventListener('click', () => {
    Wrapper2.style.display = 'none';
});

// on mouse over effect in product-choices
function changeImage(imageNumber){
    const imageHolder = document.getElementById('product-design');
    const imagePath = `images/image-product-${imageNumber}.jpg`;
    imageHolder.style.backgroundImage = `url(${imagePath})`;
};

//for wrapper2 event listeners
const prevIcon = document.getElementById('prevIcon');
const nextIcon = document.getElementById('nextIcon');
const prevIcon1 = document.getElementById('prevIcon1');
const nextIcon1 = document.getElementById('nextIcon1');

prevIcon.addEventListener('click', () => {showImage(-1)});
nextIcon.addEventListener('click', () => {showImage(1)});
prevIcon1.addEventListener('click', () => {forDisplayImage(-1)});
nextIcon1.addEventListener('click', () => {forDisplayImage(1)});

let currentImage = 1;

function forDisplayImage(offset){
  currentImage += offset;
  if(currentImage < 1){
    currentImage = 4
  }
  else if(currentImage > 4){
    currentImage = 1;
  }
    const showImage1 = document.getElementById('product-design');
    showImage1.style.backgroundImage = `url(./images/image-product-${currentImage}.jpg)`;
}

function showImage(offset){
  currentImage += offset;

  if(currentImage < 1){
    currentImage = 4;
  }
  else if(currentImage > 4){
    currentImage = 1;
  }

  const forShowImage = document.getElementById('product-design2');
  const showThumbnailBorder = document.querySelectorAll('.image-container');
  const thumbnailOpacity = 0.34;
  const thumbnailBorder = '2px solid orange';


  forShowImage.style.backgroundImage = `url(./images/image-product-${currentImage}.jpg)`;

  for (let i = 1; i <= 4; i++){
    const viewThumbnail = document.getElementById(`img${i}`);
    const viewborder = showThumbnailBorder[i -1];
    viewThumbnail.style.opacity = (currentImage === i) ? thumbnailOpacity : 1;
    viewborder.style.border = (currentImage === i) ? thumbnailBorder : 'none';
  }

};


//add to cart functionality

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const innerText = document.getElementById('innerText');


let counter = 0;

plusBtn.addEventListener('click', () => {
  counter++;
  updateInnerText();
});

minusBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    updateInnerText();
  }
});

function updateInnerText() {
  innerText.textContent = counter;
  
  addtocartBtn.addEventListener('click', () => {
    counter = 0;
  })
}

//cart hover info
const cart = document.getElementById('basket');
const cartonHover = document.getElementById('onHover-cart');
const checkoutBtn = document.getElementById('checkOut');
const contentArea = document.querySelector('.content-area');
const emptyCartCotent = document.querySelector('.emptycart');
const deleteIcon = document.getElementById('delete');

let clickCount = 0;
let innerTextforNotification = document.getElementById('innerText');
let notificationElement = document.getElementById('notifcation');
let originalValue = parseInt(innerTextforNotification.textContent, 10)


cart.addEventListener('click', () => {
  cartonHover.classList.remove('cart-hover')
  
    clickCount++

    if(clickCount === 2){
      cartonHover.classList.add('cart-hover');
      clickCount = 0;
    }  
});
checkoutBtn.addEventListener('click', () => {
  setTimeout(()=>{
    contentArea.classList.add('cart-hover');
    emptyCartCotent.classList.remove('cart-hover');
  },400)
  
  setTimeout(()=>{
    cartonHover.classList.add('cart-hover');
   },3000)
})
deleteIcon.addEventListener('click', () => {
  setTimeout(()=>{
    contentArea.classList.add('cart-hover');
    emptyCartCotent.classList.remove('cart-hover');
  },400)

  setTimeout(()=>{
   cartonHover.classList.add('cart-hover');
  },3000)
})

const addtocartBtn = document.getElementById('add2cart');
const oldQuantity = document.getElementById('oldQuantity');
let lastNumber = 0;

addtocartBtn.addEventListener('click', () => {
      let count = parseInt(innerTextforNotification.textContent, 10);
      lastNumber = count;
      oldQuantity.textContent = lastNumber;

      let priceElement = parseFloat(document.getElementById('pricedata').textContent).toFixed(2);
      let quantityElement = parseInt(oldQuantity.textContent);
      let PriceTotal = parseFloat(priceElement * quantityElement);
  
      document.getElementById('check-out-image').src = './images/image-product-1-thumbnail.jpg';
      document.getElementById('price').innerText =`$ ${priceElement}`;
      document.getElementById('quantity').innerText = quantityElement;
      document.getElementById('total').innerText = `$ ${PriceTotal.toFixed(2)}`

      if(count > 0){
        notificationElement.textContent = count;
        notificationElement.classList.remove('cart-hover');
        contentArea.classList.remove('cart-hover');
        emptyCartCotent.classList.add('cart-hover')

      }
      else{
        notificationElement.classList.add('cart-hover');
        emptyCartCotent.classList.remove('cart-hover');
        contentArea.classList.add('cart-hover');
      }
      cart.addEventListener('click', () => {
        setTimeout(() => {
          notificationElement.classList.add('cart-hover');
        },2000);
      });
      innerTextforNotification.textContent = '0';
});

//navbar menu icon functionality

const navbarMenu = document.getElementById('navbarMenu');
const navbarUL = document.getElementById('navBarUL')

navbarMenu.addEventListener('click', () => {
    navbarMenu.src = './images/icon-close.jpg'
    navbarUL.style.display = "block"
    clickCount++

    if(clickCount === 2){
      navbarMenu.src = './images/icon-menu.jpg';
      navbarUL.style.display = "none";
      clickCount = 0;
    }
})