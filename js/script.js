// SAVE THE TRANSLATED ARRAY IN A VARIABLE
let movieArr = JSON.parse(movies);

// GET THE LIKES FROM LOCAL STORAGE
movieArr[0].likes = localStorage.getItem(["Guardians of the Galaxy-Likes"]);
movieArr[1].likes = localStorage.getItem(["Dark Knight-Likes"]);
movieArr[2].likes = localStorage.getItem(["Spiderman-Likes"]);
movieArr[3].likes = localStorage.getItem(["Star Wars-Likes"]);
movieArr[4].likes = localStorage.getItem(["Mandalorian-Likes"]);
movieArr[5].likes = localStorage.getItem(["Wonderwoman-Likes"]);

// CREATE A FUNCTION TO PRINT OUT THE MEDIA DIV
function showMovies(){

  let result = "";

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
}

showMovies();
addLikes();


// LISTEN FOR CLICKS ON SORT BTN
document.getElementById("sort-btn").addEventListener ("click", movieSort);

// CREATE SORTED ARRAY
function movieSort() {
  movieArr = movieArr.sort((a, b) => b.likes - a.likes);
  showMovies();
  addLikes();

}

// LOOP THROUGH LIKE BTN AND ADD EVENTLISTENER
function addLikes(){
  let likeLink = document.getElementsByClassName("like-link");

  for (let i = 0; i < likeLink.length; i++) {
    likeLink[i].addEventListener("click", function () {
      likeIncrement(i)
    })
  };
}

// MAKE THE LIKE BTN WORK
function likeIncrement(i) {
  movieArr[i].likes++;
  document.getElementsByClassName("like-number")[i].innerHTML = movieArr[i].likes;
  localStorage.setItem(movieArr[i].movieName + "-Likes", movieArr[i].likes);
}

// localStorage.clear();