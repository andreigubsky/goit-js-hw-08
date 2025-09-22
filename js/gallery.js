const images = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const gallery = document.querySelector("ul.gallery");

// Динамічне створення рощзмітки галереї
const markup = images
    .map((image) => `<li>
                                <a class="gallery-link" target="_blank" href="${image.original}">
                                    <img 
                                        class="gallery-image" 
                                        src="${image.preview}" 
                                        data-source="${image.alt}" 
                                        alt="${image.description}" />
                                </a>
                            </li>`
    )
    .join("");

gallery.insertAdjacentHTML("afterbegin", markup);


const galleryLink = document.querySelector('a.gallery-link');
console.log(galleryLink.href);
galleryLink.addEventListener('click', function (event) {
    event.preventDefault();
});
const galleryLinkImg = document.querySelector('a.gallery-link');
galleryLinkImg.addEventListener('click', function (event) {
    event.preventDefault();
});


gallery.addEventListener("click", selectPicture);

function selectPicture(event) {
    gallery.addEventListener('click', function (event) {
        console.log("event.target: ", event.target);
        console.log("event.currentTarget: ", event.currentTarget);
    })
}


const instance = basicLightbox.create(`<div class="modal">
                                            <p style="display:block; color:white; text-align: center;">A custom modal.</p>
                                            <a style="display:block; color:white; text-align: end;">Close</a>
                                            <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg" width="800" height="600">
                                        </div>`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close;
    }
})

instance.show()
