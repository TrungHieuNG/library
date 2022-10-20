//auto change background 
const imgElement = document.querySelector('.header-img img');
const lineElement = document.querySelector('.header-underline i')
index = 1
 var imgs  = [
        './accsets/img/library.jpg',
        './accsets/img/library1.jpg',
        './accsets/img/library2.jpg']
const changeImg = function (){
   
    imgElement.src = imgs[index];

    index ++;
    if (index == 3)
    {
        index = 0;
    }
}

setInterval(changeImg, 5000);