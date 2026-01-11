let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");

let likeBtnEl = document.getElementById("likeBtn");

let isImageLike = false;

function clickOnLike(){
    if (isImageLike === false){
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.style.color = "#0967d2";
        likeBtnEl.style.backgroundColor = "#0967d2";
        likeBtnEl.style.color = "#fff";
        isImageLike = true;


    }
    else{
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconEl.style.color = "#cbd2d9";
        likeBtnEl.style.backgroundColor ="#cbd2d9";
        likeBtnEl.style.color= "#9aa5b1";
        isImageLike = false;
    }
}




