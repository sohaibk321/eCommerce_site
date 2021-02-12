$(document).ready(function() {
  $("#men").click(function() {
    $(".page_content").load("/pages/men.html")
  });

  $("#women").click(function() {
    $(".page_content").load("/pages/women.html")
  });

  $("#climb").click(function() {
    $(".page_content").load("/pages/climb.html")
  });

  $("#camp").click(function() {
    $(".page_content").load("/pages/camp.html")
  });

  $("#cycle").click(function() {
    $(".page_content").load("/pages/cycle.html")
  });

  $("#snow").click(function() {
    $(".page_content").load("/pages/snow.html")
  });

  $("#more").click(function() {
    $(".page_content").load("/pages/more.html")
  });

  $("#cart").click(function() {
    $(".page").load("/pages/checkout.html")
  });
});
