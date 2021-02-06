$(document).ready(() => {
  let isDrawerClosed = true;

  $("#toggle-menu").click(function () {
    if (isDrawerClosed) {
      $("#drawer").show(300);
      isDrawerClosed = false;
    } else {
      $("#drawer").hide(300);
      isDrawerClosed = true;
    }
  });
});
