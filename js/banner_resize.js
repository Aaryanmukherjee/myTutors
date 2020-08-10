const img = document.querySelector('.home_banner img');
const banner = document.querySelector('.home_banner');

const resize = () =>{
    let img_height = Number(img.clientHeight);
    let banner_height = Number(banner.clientHeight);
    console.log(img_height, banner_height);
    if(img_height<banner_height && img_height >= 50){
        banner.style.height = `${img_height}px`;
    }
    console.log(img_height);
    console.log(banner_height);
}


window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(resize,100);
    console.log('DOM fully loaded and parsed');
});

