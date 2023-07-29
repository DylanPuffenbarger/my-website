const imgInfo = {
    Archie: {
        src: 'pictures/archibald.jpg',
        alt: 'a tan French bulldog'
    },
    Java: {
        src: 'pictures/java.jpg',
        alt: 'a brown pit bull'
    },
    Luna: {
        src: 'pictures/luna.jpg',
        alt: 'a light-brown cavapoo'
    },
    Molly: {
        src: 'pictures/molly.jpg',
        alt: 'a rotisserie chicken with a goblin face'
    },
    Phoebe: {
        src: 'pictures/phoebe.jpg',
        alt: 'a Golden Retriever'
    },
    Shiloh: {
        src: 'pictures/shiloh_yawn.jpg',
        alt: 'a very sleepy meatloaf pig'
    },
    Squid: {
        src: 'pictures/squid.jpg',
        alt: 'a sassy French bulldog/Boston terrier mix'
    }
}

const dogList = [];
for (dog in imgInfo){
    dogList.push(dog);
}

function dogImg(i){
    const index = i%dogList.length;
    const newImg = document.createElement('img');
    newImg.src = imgInfo[dogList[index]].src;
    newImg.alt = imgInfo[dogList[index]].alt;
    newImg.title = dogList[index];
    newImg.id = index;
    return newImg;
}

const imgPanel = document.getElementById('img-panel');
imgPanel.append(dogImg(0));

function prevImg(){
    const currentImg = imgPanel.getElementsByTagName('img')[0];
    const i = parseInt(currentImg.id);
    if (i === 0){
        imgPanel.append(dogImg(dogList.length-1));
    } else {
        imgPanel.append(dogImg(i-1));
    }
    imgPanel.removeChild(currentImg);
}
function nextImg(){
    const currentImg = imgPanel.getElementsByTagName('img')[0];
    const i = parseInt(currentImg.id);
    if (i === dogList.length-1){
        imgPanel.append(dogImg(0));
    } else {
        imgPanel.append(dogImg(i+1));
    }
    imgPanel.removeChild(currentImg);
}

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
leftButton.addEventListener('click', prevImg);
rightButton.addEventListener('click', nextImg);