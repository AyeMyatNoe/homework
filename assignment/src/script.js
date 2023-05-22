var menuBtn = document.getElementById("menuBtn");
var close = document.getElementById("close");
var homeBtn = document.getElementById("home");
var homeBtn2 = document.getElementById("home2");
var homeBtn3 = document.getElementById("home3");
var homeBtn4 = document.getElementById("home4");
var countryBtn = document.getElementById("country");
var moviesBtn = document.getElementById("movies");
var moviesBtn1 = document.getElementById("movies1");
var moviesBtn2 = document.getElementById("movies2");
var moviesBtn3 = document.getElementById("movies3");
var moviesBtn4 = document.getElementById("movies4");
var showsBtn = document.getElementById("shows");
var showsBtn1 = document.getElementById("shows1");
var showsBtn2 = document.getElementById("shows2");
var showsBtn3 = document.getElementById("shows3");
var showsBtn4 = document.getElementById("shows4");
var IMDBBtn = document.getElementById("IMDB");
var IMDBBtn1 = document.getElementById("IMDB1");
var IMDBBtn2 = document.getElementById("IMDB2");
var IMDBBtn3 = document.getElementById("IMDB3");
var IMDBBtn4 = document.getElementById("IMDB4");
var loginBtn = document.getElementById("login");
var loginBtn1 = document.getElementById("login1");
var loginBtn2 = document.getElementById("login2");
var loginBtn3 = document.getElementById("login3");
var loginBtn4 = document.getElementById("login4");
var loginBtn5 = document.getElementById("login5");

var back = document.getElementById("back");
var m2 = document.getElementById("m2");
var back1 = document.getElementById("back1");

var mobileMenu = document.querySelector(".mobileMenu");
var movies = document.querySelector(".movies");
var home = document.querySelector(".home");
var shows = document.querySelector(".shows");
var IMDB = document.querySelector(".IMDB");
var loginPg = document.querySelector(".login");
var moviePg = document.querySelector(".moviePg");


menuBtn.addEventListener("click", () => {
  console.log("hi");
  mobileMenu.classList.add("flex");
  mobileMenu.classList.remove("hidden");
});
close.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
homeBtn.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
});

homeBtn2.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
});
homeBtn3.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  IMDB.classList.add("hidden");
});
homeBtn4.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  IMDB.classList.add("hidden");
});
moviesBtn.addEventListener("click", () => {
  console.log("hi");
  movies.classList.add("block");
  movies.classList.remove("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
  shows.classList.add("hidden");
});
moviesBtn1.addEventListener("click", () => {
  console.log("hi");
  movies.classList.add("block");
  movies.classList.remove("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
  shows.classList.add("hidden");
});
moviesBtn2.addEventListener("click", () => {
  console.log("hi");
  movies.classList.add("block");
  movies.classList.remove("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
  shows.classList.add("hidden");
});
moviesBtn3.addEventListener("click", () => {
  console.log("hi");
  movies.classList.add("block");
  movies.classList.remove("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
  shows.classList.add("hidden");
});
moviesBtn4.addEventListener("click", () => {
  console.log("hi");
  movies.classList.add("block");
  movies.classList.remove("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
  shows.classList.add("hidden");
});
showsBtn.addEventListener("click", () => {
  console.log("hi");
  shows.classList.add("block");
  shows.classList.remove("hidden");
  home.classList.add("hidden");
  movies.classList.add("hidden");
  IMDB.classList.add("hidden");
});
showsBtn1.addEventListener("click", () => {
  console.log("hi");
  shows.classList.add("block");
  shows.classList.remove("hidden");
  home.classList.add("hidden");
  movies.classList.add("hidden");
  IMDB.classList.add("hidden");
});
showsBtn2.addEventListener("click", () => {
  console.log("hi");
  shows.classList.add("block");
  shows.classList.remove("hidden");
  home.classList.add("hidden");
  movies.classList.add("hidden");
  IMDB.classList.add("hidden");
});
showsBtn3.addEventListener("click", () => {
  console.log("hi");
  shows.classList.add("block");
  shows.classList.remove("hidden");
  home.classList.add("hidden");
  movies.classList.add("hidden");
  IMDB.classList.add("hidden");
});
showsBtn4.addEventListener("click", () => {
  console.log("hi");
  shows.classList.add("block");
  shows.classList.remove("hidden");
  home.classList.add("hidden");
  movies.classList.add("hidden");
  IMDB.classList.add("hidden");
});
IMDBBtn.addEventListener("click", () => {
  console.log("hi");
  IMDB.classList.add("block");
  IMDB.classList.remove("hidden");
  home.classList.add("hidden");
  shows.classList.add("hidden");
  movies.classList.add("hidden");
});
IMDBBtn1.addEventListener("click", () => {
  console.log("hi");
  IMDB.classList.add("block");
  IMDB.classList.remove("hidden");
  home.classList.add("hidden");
  shows.classList.add("hidden");
  movies.classList.add("hidden");
});
IMDBBtn2.addEventListener("click", () => {
  console.log("hi");
  IMDB.classList.add("block");
  IMDB.classList.remove("hidden");
  home.classList.add("hidden");
  shows.classList.add("hidden");
  movies.classList.add("hidden");
});
IMDBBtn3.addEventListener("click", () => {
  console.log("hi");
  IMDB.classList.add("block");
  IMDB.classList.remove("hidden");
  home.classList.add("hidden");
  shows.classList.add("hidden");
  movies.classList.add("hidden");
});
IMDBBtn4.addEventListener("click", () => {
  console.log("hi");
  IMDB.classList.add("block");
  IMDB.classList.remove("hidden");
  home.classList.add("hidden");
  shows.classList.add("hidden");
  movies.classList.add("hidden");
});
loginBtn.addEventListener("click", () => {
  console.log("hi");
  loginPg.classList.remove("hidden");
  loginPg.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  home.classList.add("hidden");

});
loginBtn1.addEventListener("click", () => {
  loginPg.classList.remove("hidden");
  loginPg.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  home.classList.add("hidden");
});
loginBtn2.addEventListener("click", () => {
  loginPg.classList.remove("hidden");
  loginPg.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  home.classList.add("hidden");
});
loginBtn3.addEventListener("click", () => {
  loginPg.classList.remove("hidden");
  loginPg.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
});
loginBtn4.addEventListener("click", () => {
  loginPg.classList.remove("hidden");
  loginPg.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  home.classList.add("hidden");
  IMDB.classList.add("hidden");
});

back.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  loginPg.classList.add("hidden")
});
back1.addEventListener("click", () => {
  console.log("hi");
  home.classList.remove("hidden");
  home.classList.add("block");
  movies.classList.add("hidden");
  shows.classList.add("hidden");
  loginPg.classList.add("hidden")
  moviePg.classList.add("hidden");
});
m2.addEventListener("click", () => {
  console.log("hi");
  moviePg.classList.remove("hidden");
  moviePg.classList.add("block");
  home.classList.add("hidden");
});