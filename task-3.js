"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

let ulList = document.getElementById("gallery");
ulList.setAttribute("style", "list-style-type:none; display: flex;");

const urlImage = images.forEach(image => {
  const li = document.createElement("li");
  let imageFile = document.createElement("img");
  imageFile.setAttribute(
    "style",
    "width: 200px; height: 150px; margin-right: 20px"
  );
  ulList.appendChild(li).insertAdjacentElement("beforeEnd", imageFile);
  imageFile.src = image.url;
  imageFile.alt = image.alt;
});
