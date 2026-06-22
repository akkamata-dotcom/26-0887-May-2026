window.addEventListener("DOMContentLoaded", function () {
  var banner = document.createElement("div");
  banner.id = "discount-banner";
  banner.innerHTML =
    '<span>🎉 Special Offer!</span> Book <strong>3 tickets</strong> together and get a <strong>16% discount</strong> on your total fare! Call us or book online to claim your deal.' +
    '<button id="close-banner">✕ Close</button>';

  document.body.insertBefore(banner, document.body.firstChild);

  document.getElementById("close-banner").addEventListener("click", function () {
    banner.style.display = "none";
  });
});
