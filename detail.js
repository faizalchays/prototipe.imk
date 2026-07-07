const movies = {

"Extraction":{

title:"Extraction",
image:"assets/images/extraction.jpg",
video:"assets/video/Extraction.mp4",
description:"Seorang tentara bayaran ditugaskan menyelamatkan anak seorang bos kriminal internasional.",
year:"2020",
duration:"116 Menit",
rating:"⭐ 8.2",
genre:"Aksi",
cast:"Chris Hemsworth",
trailer:"https://www.youtube.com/embed/L6P3nI6VnlY"
},

"Agak Laen":{
title:"Agak Laen",
image:"assets/images/agaklaen.jpeg",
video:"assets/video/agaklaen.mp4",
description:"Empat sahabat mengelola rumah hantu yang berubah menjadi viral.",
year:"2024",
duration:"119 Menit",
rating:"⭐ 8.4",
genre:"Komedi",
cast:"Bene Dion, Boris Bokir",
trailer:"https://www.youtube.com/embed/Kl7F4QxPq3I"
}
};

const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const movie = movies[title];

if(movie){
document.getElementById("movie-title").textContent = movie.title;
document.getElementById("movie-image").src = movie.image;
document.getElementById("movie-description").textContent = movie.description;
document.getElementById("movie-year").textContent = movie.year;
document.getElementById("movie-duration").textContent = movie.duration;
document.getElementById("movie-rating").textContent = movie.rating;
document.getElementById("movie-genre").textContent = movie.genre;
document.getElementById("movie-cast").textContent = movie.cast;
document.getElementById("movie-trailer").src = movie.trailer;
document.getElementById("watch-button").href =
movie.video;
}