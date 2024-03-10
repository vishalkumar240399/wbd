// aos animation
AOS.init();

// navbar animation
let header = document.querySelector('.header');
let carousel = document.querySelector('.carousel');
let breadCrumb = document.querySelector('.breadcrumb-area');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');

        if (carousel !== null) {
            carousel.style.marginTop = header.offsetHeight + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = header.offsetHeight + 'px';
        }
    } else {
        header.classList.remove('active');

        if (carousel !== null) {
            carousel.style.marginTop = 0 + 'px';
        } else if (breadCrumb !== null) {
            breadCrumb.style.marginTop = 0 + 'px';
        }
    }
}

// selecting filter menu and filter items
let filterMenu = document.querySelectorAll('.filter-menu li');
let filterContents = document.querySelectorAll('.filter-content');

// delete construction projects
for (let i = 0; i < filterContents.length; i++) {
    if (filterContents[i].getAttribute('data-item') === 'construction') {
        filterContents[i].classList.add('deleteContents');
    }
}

// filter construction and interior projects
for (let i = 0; i < filterMenu.length; i++) {
    filterMenu[i].addEventListener('click', () => {
        // delete active menu
        for (let j = 0; j < filterMenu.length; j++) {
            filterMenu[j].classList.remove('active-menu');
        }

        // select active menu
        filterMenu[i].classList.add('active-menu');
        let attrValue = filterMenu[i].getAttribute('data-list');

        for (let k = 0; k < filterContents.length; k++) {
            // delete all active contents 
            filterContents[k].classList.add('deleteContents');
            filterContents[k].classList.remove('activeContents');

            // display filter contents
            if (filterContents[k].getAttribute('data-item') === attrValue) {
                filterContents[k].classList.add('activeContents');
                filterContents[k].classList.remove('deleteContents');
            }
        }
    });
}

// selecting lightbox elements
let lightBox = document.querySelector('.lightbox');
let closeBtn = document.querySelector('.lightbox-close-btn');
let lightBoxImage = document.querySelector('.image-wrapper img');
let lightBoxShadow = document.querySelector('.lightbox-shadow');
let controlScrolling = document.querySelector('html');

let lightBoxArrow = document.querySelector('.lightbox-arrow');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

for (let i = 0; i < filterContents.length; i++) {
    // lightbox show, slide, close
    filterContents[i].addEventListener('click', () => {

        if (lightBox !== null) {
            let getImg = filterContents[i].querySelector('img').src;

            lightBoxImage.src = getImg;

            // show lightbox
            lightBox.classList.add('show-lightbox');
            lightBoxShadow.classList.add('show-shadow');
            controlScrolling.style.overflow = 'hidden';
            lightBoxArrow.classList.add('show-lightbox-arrow');
        } else {
            // go to project page
            window.location = 'services.html';
        }

        // slide image
        function slideImage(index) {
            getImg = filterContents[index].querySelector('img').src;
            lightBoxImage.src = getImg;
        }

        let slideIndex = i;

        // slide left
        leftArrow.onclick = () => {
            slideIndex--;

            if (slideIndex < 0) {
                slideIndex = filterContents.length - 1;
            }

            slideImage(slideIndex);
        }

        // slide right
        rightArrow.onclick = () => {
            slideIndex++;

            if (slideIndex >= filterContents.length) {
                slideIndex = 0;
            }

            slideImage(slideIndex);
        }

        // slide when arrow key down
        document.onkeydown = (event) => {
            // slide left
            if (event.keyCode === 37) {
                slideIndex--;

                if (slideIndex < 0) {
                    slideIndex = filterContents.length - 1;
                }

                slideImage(slideIndex);
            }

            // slide right
            if (event.keyCode === 39) {
                slideIndex++;

                if (slideIndex >= filterContents.length) {
                    slideIndex = 0;
                }

                slideImage(slideIndex);
            }
        }

        // close lightbox
        closeBtn.onclick = () => {
            lightBox.classList.remove('show-lightbox');
            lightBoxShadow.classList.remove('show-shadow');
            lightBoxArrow.classList.remove('show-lightbox-arrow');
            controlScrolling.style.overflow = 'auto';
        }
    });
}

// service gallery
let galleryContent = document.querySelectorAll('.service-gallery-content');

for (let i = 0; i < galleryContent.length; i++) {
    // when onclick then go to project page
    galleryContent[i].onclick = () => {
        window.location = 'project.html';
    }
}











// Projects

// Project one

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage);

// Project 2

const imgs1 = document.querySelectorAll('.img-select1 a');
const imgBtns1 = [...imgs1];
let imgId1 = 1;

imgBtns1.forEach((imgItem1) => {
    imgItem1.addEventListener('click', (event) => {
        event.preventDefault();
        imgId1 = imgItem1.dataset.id;
        slideImage1();
    });
});

function slideImage1(){
    const displayWidth = document.querySelector('.img-showcase1 img:first-child').clientWidth;

    document.querySelector('.img-showcase1').style.transform = `translateX(${- (imgId1 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage1);

// Project 3

const imgs2 = document.querySelectorAll('.img-select2 a');
const imgBtns2 = [...imgs2];
let imgId2 = 1;

imgBtns2.forEach((imgItem2) => {
    imgItem2.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem2.dataset.id;
        slideImage2();
    });
});

function slideImage2(){
    const displayWidth = document.querySelector('.img-showcase2 img:first-child').clientWidth;

    document.querySelector('.img-showcase2').style.transform = `translateX(${- (imgId2 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage2);
// Project 4

const imgs3 = document.querySelectorAll('.img-select3 a');
const imgBtns3 = [...imgs3];
let imgId3 = 1;

imgBtns3.forEach((imgItem3) => {
    imgItem3.addEventListener('click', (event) => {
        event.preventDefault();
        imgId3 = imgItem3.dataset.id;
        slideImage3();
    });
});

function slideImage3(){
    const displayWidth = document.querySelector('.img-showcase3 img:first-child').clientWidth;

    document.querySelector('.img-showcase3').style.transform = `translateX(${- (imgId3 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage3);

// Project 5

const imgs4 = document.querySelectorAll('.img-select4 a');
const imgBtns4 = [...imgs4];
let imgId4 = 1;

imgBtns4.forEach((imgItem4) => {
    imgItem4.addEventListener('click', (event) => {
        event.preventDefault();
        imgId4 = imgItem4.dataset.id;
        slideImage4();
    });
});

function slideImage4(){
    const displayWidth = document.querySelector('.img-showcase4 img:first-child').clientWidth;

    document.querySelector('.img-showcase4').style.transform = `translateX(${- (imgId4 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage4);

// Project 6

const imgs5 = document.querySelectorAll('.img-select5 a');
const imgBtns5 = [...imgs5];
let imgId5 = 1;

imgBtns5.forEach((imgItem5) => {
    imgItem5.addEventListener('click', (event) => {
        event.preventDefault();
        imgId5 = imgItem5.dataset.id;
        slideImage5();
    });
});

function slideImage5(){
    const displayWidth = document.querySelector('.img-showcase5 img:first-child').clientWidth;

    document.querySelector('.img-showcase5').style.transform = `translateX(${- (imgId5 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage5);

// Project 7

const imgs6 = document.querySelectorAll('.img-select6 a');
const imgBtns6 = [...imgs6];
let imgId6 = 1;

imgBtns6.forEach((imgItem6) => {
    imgItem6.addEventListener('click', (event) => {
        event.preventDefault();
        imgId6 = imgItem6.dataset.id;
        slideImage6();
    });
});

function slideImage6(){
    const displayWidth = document.querySelector('.img-showcase6 img:first-child').clientWidth;

    document.querySelector('.img-showcase6').style.transform = `translateX(${- (imgId6 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage6);

// Project 8

const imgs7 = document.querySelectorAll('.img-select7 a');
const imgBtns7 = [...imgs7];
let imgId7 = 1;

imgBtns7.forEach((imgItem7) => {
    imgItem7.addEventListener('click', (event) => {
        event.preventDefault();
        imgId7 = imgItem7.dataset.id;
        slideImage7();
    });
});

function slideImage7(){
    const displayWidth = document.querySelector('.img-showcase7 img:first-child').clientWidth;

    document.querySelector('.img-showcase7').style.transform = `translateX(${- (imgId7 - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage7);