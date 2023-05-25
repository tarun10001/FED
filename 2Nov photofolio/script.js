const myModalE1 = document.getElementById('exampleModal');

myModalE1.addEventListener('hidden.bs.modal', op => {
    document.getElementById("ifr").setAttribute('src', '');
});


myModalE1.addEventListener('show.bs.modal', op => {
    const target = op.relatedTarget;
    console.log(target);
    const url = target.getAttribute('data-video');
    const iframeUrl = url+'?autoplay=1&loop=0&autopause=0&cc_load_policy=1&cc_lang_pref=en';
    console.log(iframeUrl);
    document.getElementById("ifr").setAttribute('src', iframeUrl);
});


const folio = [
    {
        video_url: "https://www.youtube.com/embed/DHjqpvDnNGE",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-1.jpg"
    }, {
        video_url: "https://www.youtube.com/embed/OEV8gMkCHXQ",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-2.jpg"
    }, {
        video_url: "https://www.youtube.com/embed/Tn6-PIqc4UM",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-3.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-4.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-5.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-7.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-9.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-10.jpg"
    }, {
        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-12.jpg"
    }, {

        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-14.jpg"
    }, {

        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-16.jpg"
    }, {

        video_url: "",
        image: "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-13.jpg"
    },
]


const folioT = folio.map(function (item) {
    return `
    <div class="gallery-item col-xl-3 col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal" data-video=${item.video_url}> 
    <img src=${item.image} class="imgfluid" alt="">
    </div>          
    `
})
document.querySelector('.row').innerHTML = folioT;