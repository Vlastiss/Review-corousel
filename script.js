$(document).ready(function () {

  
  $("#random").click(function () {
    var img = randomImage();
    var activeItemId = $(".carousel-item.active").attr('id');

    if (activeItemId !== $(img).attr('id')) {
      $(".carousel-item").removeClass("active"); // Remove "active" class from all carousel items
      $(img).addClass("active");
    } else {
      // Do something if the selected image is already active
      console.log("Selected image is already active.");
    }
  });

  function randomImage() {
    var images = ['#img1', '#img2', '#img3', '#img4']
    var image = images[Math.floor(Math.random() * images.length)];
    return image;
  }
});