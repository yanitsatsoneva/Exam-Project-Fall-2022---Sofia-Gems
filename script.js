var navbar = document.getElementById("navbar");

var menu = document.getElementById("nav_links");

window.onscroll = function() {
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");
  }

  else {
    navbar.classList.remove("sticky");
  }
};

const toggleModal = () => {
  const { classList } = document.body;
  if (classList.contains("open")) {
    classList.remove("open");
    classList.add("closed");
  } else {
    classList.remove("closed");
    classList.add("open");
  }
};

/*gallery*/
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
  )
  .join('');

document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => scrollThumb());

scrollThumb();

/*rating*/
  // Select all elements with the "i" tag and store them in a NodeList called "stars"
  const stars = document.querySelectorAll(".stars i");

  // Loop through the "stars" NodeList
  stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
      // Loop through the "stars" NodeList Again
      stars.forEach((star, index2) => {
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
  });
 
  

