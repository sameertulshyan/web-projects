var sliderIndex = 1;
showSlides(sliderIndex);

/*
 * This function calls the showSlides function with a modified index of += n
 */
function plusSlides(n) {
  showSlides(sliderIndex += n);
}

/*
 * This function displays the relevant slide on the webpage
 */
function showSlides(n) {
  let slider = document.getElementsByClassName("slider");

  if (n > slider.length) { // for moving back at the end of the array
    sliderIndex = 1
  }
  if (n < 1) { // for moving forwards at the end of the array
    sliderIndex = slider.length
  }

  for (i = 0; i < slider.length; i++) { // displaying slider
      slider[i].style.display = "none";
  }

  slider[sliderIndex-1].style.display = "block";
}