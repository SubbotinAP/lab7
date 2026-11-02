document.addEventListener("DOMContentLoaded", function () {
  var foldBtns = document.getElementsByClassName("fold-button");

  for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function (e) {
      // Находим родителя (блок one-post)
      var postElement = e.target.closest(".one-post");

      // Переключаем класс folded у родителя
      postElement.classList.toggle("folded");

      // Меняем текст кнопки в зависимости от состояния
      if (postElement.classList.contains("folded")) {
        e.target.innerHTML = "развернуть";
      } else {
        e.target.innerHTML = "свернуть";
      }
    });
  }
});
