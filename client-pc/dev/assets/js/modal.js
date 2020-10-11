$(function () {
  $(".modal__closer").on("click", function () {
    $(this).parents(".modal").hide();
  });
});
