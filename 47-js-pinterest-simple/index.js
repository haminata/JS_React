/**
 * Exercise #
 *
 */


const changeIcon = () => {
    let elem = document.getElementById('emptyHeart');
    let splitText = elem.src.split("/");

    let filename = splitText[splitText.length - 1];// last element of array
    if(filename === 'like_empty.png'){
        elem.src ='./img/like_full.png';

    }else if(filename === 'img/like_full.png' ){
        elem ='./img/like_empty.png';
    }else{
        elem ='./img/like_full.png';
    }
    console.log(`Testing elem: ${elem} `);
}

