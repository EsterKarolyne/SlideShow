const images = [
    {'id':'1', 'url':'/files/aot.jpg' },
    {'id':'2', 'url':'/files/op.jpg' },
    {'id':'3', 'url':'/files/naruto.jpg' },
    {'id':'4', 'url':'/files/KnY.jpg' },
    {'id':'5', 'url':'/files/BNH.jpg' },
]

const containerItems = document.querySelector('#container-items')


const loadImages = (images, container) =>{
    
    images.forEach(image => {
        container.innerHTML += `
        <div class="item">
        <img src ='${image.url}'
        </div>
        `
        
    });
}


loadImages(images, containerItems);

let items = document.querySelectorAll('.item')

const previous = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item')
    
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)