const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    'https://dr.savee-cdn.com/things/6/5/51a3db8372836e85fd4f79.webp',
    'https://dr.savee-cdn.com/things/6/5/5494bbc9968d1c71e4fcc3.png',
    'https://dr.savee-cdn.com/things/6/5/4ee53f5b9081454f323fb7.webp',
    'https://dr.savee-cdn.com/things/6/4/998e86662a89e259f77992.png'
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img; 
        section.querySelector('.scroll_section').appendChild(image);
    });
});

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})
function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')

    let percentage = ((window.scrollY - offsetTop)/ window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

