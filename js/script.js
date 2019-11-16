

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', displaynavbar);


function displaynavbar() {
    let h = document.querySelector('.navbardisplay').classList.toggle('displayflex');
    console.log('hi');

}
