// 喜欢
$(".do-like").on("mouseover",function (param) {
  $(".like-title").addClass("animated heartBeat infinite")
})
$(".do-like").on("mouseout",function (param) {
  $(".like-title").removeClass("animated heartBeat infinite")
})
$(".do-like").on("click",function (param) {
  var likeNum = Number($(".left-likeCount span").text()) + 1
  $(".left-likeCount span").html(likeNum)
})

// 版块切换
$(".nav ul li a").on("click", function () {
  var currentAnchor = $(this).attr("data-class")
  sessionStorage.setItem("currentAnchor", JSON.stringify(currentAnchor)) 
  $(`.main-central`).addClass("hidden")
  $(`.${currentAnchor}`).removeClass("hidden")
})

// 页面刷新显示上次访问的版块
$(function () {
  var currentAnchor =JSON.parse(sessionStorage.getItem("currentAnchor"))
  if(currentAnchor) {
    $(`.main-central`).addClass("hidden")
    $(`.${currentAnchor}`).removeClass("hidden")
  }
})