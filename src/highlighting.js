// Table Rows Highlighting on hover / touch

document.addEventListener("DOMContentLoaded", tableRowHighLighting);

function tableRowHighLighting() {
  let tableRow = document.querySelectorAll("tbody tr");
  tableRow.forEach(function (item) {
    item.addEventListener("mouseenter", mEnter);
    item.addEventListener("mouseleave", mLeave);
  });
}

function mLeave(event) {
  if (event.srcElement !== document.querySelector(":hover")) {
    event.srcElement.className = "";
  }
}

function mEnter(event) {
  event.srcElement.className = "hover";
}
