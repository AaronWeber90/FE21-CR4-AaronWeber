
let movieArr = JSON.parse(movies)

console.log(movieArr)

let result = ""

for (let i = 0; i < movieArr.length; i++) {
  result += `
  <div class="media p-1 flex-grow-1">
  <img src="${movieArr[i].image}" alt="" class="border">
  <div class="media-body p-3 d-flex flex-column justify-content-between">
    <div class="text-left">
        <h4>${movieArr[i].movieName}</h4>
        <p>${movieArr[i].description}</p>
    </div>  
    <div class="text-right"><span id="like-btn" class="like-link">Like <i class="fas fa-thumbs-up"></i></span><span class="like-number rounded-circle">${movieArr[i].likes}</span></div>
  </div>
  </div>`
}



document.getElementById("movie-container").innerHTML = result;



let likeLink = document.getElementsByClassName("like-link");

for (let i = 0; i < likeLink.length; i++) {
  likeLink[i].addEventListener("click", function () {
    likeIncrement(i)
  })
};

function likeIncrement(i) {
  movieArr[i].likes++;
  document.getElementsByClassName("like-number")[i].innerHTML = movieArr[i].likes;
}

console.log(likeLink)


// document.getElementById("sort-btn").addEventListener ("click", movieSort);

// function movieSort() {
// movieArr.sort(function(a, b){
// return b.likes - a.likes;});
// }