$(function () {
  $(".gnb-sub").on({
    mouseover: function () {
      if ($(this).index(2)) {
        $(".sub-menu-3").slideToggle();
      }
    },
  });
});
