function showContactModal() {
  document.getElementsByClassName("modal-backdrop")[0].style.display = "grid";
}

function closeContactModal(e) {
  if (
    e.target == document.getElementsByClassName("modal-backdrop")[0] ||
    e.target == document.getElementById("closeButton")
  ) {
    document.getElementsByClassName("modal-backdrop")[0].style.display = "";

    document.getElementsByClassName("item")[0].style.display = "";
    document.getElementsByClassName("price")[0].style.display = "";

    document.getElementsByClassName("item")[0].textContent = "";
    document.getElementsByClassName("price")[0].textContent = "";

    var offer = document.querySelector("[name='offer']");
    offer.setAttribute("value", "");
  }
}
