// Car script 

// Cars data
const Cars = [
  {
    id: 1,
    name: "Bentley Continental",
    img: "images/car-1851299_1920.jpg",
    Engine: "5998 cc",
    TopSpeed: "325 kmph",
    Mileage: "6.0",
  },
  {
    id: 1,
    name: "Ford Gt-21",
    img: "images/car-1376190_1920.jpg",
    Engine: "3496 cc",
    TopSpeed: "348 kmph",
    Mileage: "4.68",
  },
  {
    id: 2,
    name: "Audi A1",
    img: "images/car-604019_1920.jpg",
    Engine: "999 cc",
    TopSpeed: "194 kmph",
    Mileage: "15.0",
  },
];

const CarImg = document.getElementById("car-img");
const CarCard = document.getElementById("property-image-Car");
const displayCar = window.getComputedStyle(CarCard).backgroundImage;
const nextBtn = document.querySelector(".carImage2");
const prevBtn = document.querySelector(".carImage1");

// car info variables
const Cartitle = document.querySelector(".property-image-title-Car");
const CarEngine = document.querySelector(".engine");
const CarTopSpeed = document.querySelector(".topspeed");
const CarMileage = document.querySelector(".mileage");

let currentCar = 0;

document.addEventListener("DOMContentLoaded", function () {
  // CarImg.src = "url('/JavaScript/Projects/NewProject/images/car-1851299_1920.jpg')";
  ChangeCar(currentCar);
});

// change first appearance of cars before the modal window
function ChangeCar() {
  const item = Cars[currentCar];

  CarImg.src = item.img;
}

// changing car modal image,title,topspeed
function ChangeCarModal() {
  if (currentCar === 1 && currentCar !== 0) {
    CarCard.style.backgroundImage =
      "images/car-1376190_1920.jpg')";
    Cartitle.textContent = Cars[currentCar].name;
    CarEngine.textContent = Cars[currentCar].Engine;
    CarTopSpeed.textContent = Cars[currentCar].TopSpeed;
    CarMileage.textContent = Cars[currentCar].Mileage;

    console.log(currentCar);
  } else if (currentCar === 2 && currentCar !== 0) {
    CarCard.style.backgroundImage =
      "url('images/car-604019_1920.jpg')";
    Cartitle.textContent = Cars[currentCar].name;
    CarEngine.textContent = Cars[currentCar].Engine;
    CarTopSpeed.textContent = Cars[currentCar].TopSpeed;
    CarMileage.textContent = Cars[currentCar].Mileage;
  } else {
    CarCard.style.backgroundImage =
      "url('images/car-1851299_1920.jpg')";
    Cartitle.textContent = Cars[currentCar].name;
    CarEngine.textContent = Cars[currentCar].Engine;
    CarTopSpeed.textContent = Cars[currentCar].TopSpeed;
    CarMileage.textContent = Cars[currentCar].Mileage;
  }
}

// next button
nextBtn.addEventListener("click", function () {
  currentCar++;

  if (currentCar > Cars.length - 1) {
    currentCar = 0;
  }

  ChangeCar();
  ChangeCarModal();
});

// prev button
prevBtn.addEventListener("click", function () {
  currentCar--;

  if (currentCar < 0) {
    currentCar = Cars.length - 1;
  }

  ChangeCar();
  ChangeCarModal();
});


// initial variables
const modal = document.querySelector(".Carmodal");
const overlay = document.querySelector(".Caroverlay");
const showImg = document.querySelector(".img-container1");
const closeImg = document.querySelector(".property-social-icons-Car");

showImg.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeImg.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// escape key to close
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});

("use strict");

// Bikes data
const Bikes = [
  {
    id: 1,
    name: "Yamaha mt07",
    img: "images/motorcycle-6626809_1920.jpg",
    Engine: "689 cc",
    TopSpeed: "214 kmph",
    Mileage: "24.2",
  },
  {
    id: 1,
    name: "Bmw r18",
    img: "images/bmw-1313343_1920.jpg",
    Engine: "1802 cc",
    TopSpeed: "180 kmph",
    Mileage: "17.8",
  },
  {
    id: 2,
    name: "Yamah XSR700",
    img: "images/dirt-road-1851258_1920.jpg",
    Engine: "689 cc",
    TopSpeed: "200 kmph",
    Mileage: "23.1",
  },
];

// console.log(Bikes.length);

const BikeImg = document.getElementById("bike-img");
const BikeCard = document.getElementById("property-image-Bike");
const displayBike = window.getComputedStyle(BikeCard).backgroundImage;
const nextBtn_bike = document.querySelector(".BikeImage2");
const prevBtn_bike = document.querySelector(".BikeImage1");

// Bike info variables
const Biketitle = document.querySelector(".property-image-title-Bike");
const BikeEngine = document.querySelector(".Bike_engine");
const BikeTopSpeed = document.querySelector(".Bike_topspeed");
const BikeMileage = document.querySelector(".Bike_mileage");

let currentBike = 0;

document.addEventListener("DOMContentLoaded", function () {
  // BikeImg.src = "url('/JavaScript/Projects/NewProject/images/Bike-1851299_1920.jpg')";
  ChangeBike(currentBike);
});

// change first appearance of Bikes before the modal window
function ChangeBike() {
  const item = Bikes[currentBike];

  BikeImg.src = item.img;
}

// changing Bike modal image,title,topspeed,mileage
function ChangeBikeModal() {
  if (currentBike === 1 && currentBike !== 0) {
    BikeCard.style.backgroundImage =
      "url('images/bmw-1313343_1920.jpg')";
    Biketitle.textContent = Bikes[currentBike].name;
    BikeEngine.textContent = Bikes[currentBike].Engine;
    BikeTopSpeed.textContent = Bikes[currentBike].TopSpeed;
    BikeMileage.textContent = Bikes[currentBike].Mileage;
  } else if (currentBike === 2 && currentBike !== 0) {
    BikeCard.style.backgroundImage =
      "url('images/dirt-road-1851258_1920.jpg')";
    Biketitle.textContent = Bikes[currentBike].name;
    BikeEngine.textContent = Bikes[currentBike].Engine;
    BikeTopSpeed.textContent = Bikes[currentBike].TopSpeed;
  } else {
    BikeCard.style.backgroundImage =
      "url('images/motorcycle-6626809_1920.jpg')";
    Biketitle.textContent = Bikes[currentBike].name;
    BikeEngine.textContent = Bikes[currentBike].Engine;
    BikeTopSpeed.textContent = Bikes[currentBike].TopSpeed;
  }
}

// next button
nextBtn_bike.addEventListener("click", function () {
  currentBike++;

  if (currentBike > Bikes.length - 1) {
    currentBike = 0;
  }

  ChangeBike();
  ChangeBikeModal();
});

// prev button
prevBtn_bike.addEventListener("click", function () {
  currentBike--;

  if (currentBike < 0) {
    currentBike = Bikes.length - 1;
  }

  ChangeBike();
  ChangeBikeModal();
});

("use strict");

const bikeModal = document.querySelector(".Bikemodal");
const bikeOverlay = document.querySelector(".Bikeoverlay");
const showImgBike = document.querySelector(".img-container2");
const closImgBike = document.querySelector(".property-social-icons-Bike");

// open modal window
showImgBike.addEventListener("click", function () {
  bikeModal.classList.remove("hidden-bike");
  bikeOverlay.classList.remove("hidden-bike");
});

// close modal window
closImgBike.addEventListener("click", function () {
  bikeModal.classList.add("hidden-bike");
  bikeOverlay.classList.add("hidden-bike");
});

// escape key to close
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!bikeModal.classList.contains("hidden")) {
      bikeModal.classList.add("hidden-bike");
      bikeOverlay.classList.add("hidden-bike");
    }
  }
});
