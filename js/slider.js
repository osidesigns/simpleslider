// Slider Code

//Element Handles
const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right') ;
let counter = 0;

//Defined Bikes Array
const bikes = [
    {
      bikeName: 'YAMAHA R1',
      pic: 'imgs/yamahaR1.jpg'
    },
    {
      bikeName: 'SUZUKI GSX-R750',
      pic: 'imgs/gixer750.jpg'
    },
    {
      bikeName: 'KAWASAKI ZX-10',
      pic: 'imgs/kawasakiZX10.jpg'
    }
  ];
  
  const slideContainer = document.querySelector('#slideContainer');
  let imageRoll;

  slideContainer.innerHTML = `<img src='${bikes[counter].pic}' />`;

  nextBtn.onclick = () => {
    counter < bikes.length - 1 ? counter++ : counter = 0;
    console.log(counter);
    slideContainer.innerHTML = `<img src='${bikes[counter].pic}' class="animate__animated animate__slideInRight" />`;
  }

  prevBtn.onclick = () => {
    counter === 0 ? counter = 2 : counter--;
    console.log(counter);
    slideContainer.innerHTML = `<img src='${bikes[counter].pic}' class="animate__animated animate__slideInLeft" />`;
  }
  
  
  
  
  