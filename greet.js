window.addEventListener("DOMContentLoaded", function () {

  // ===== CREATE WELCOME BANNER =====
  var banner = document.createElement("div");
  banner.id = "greet-banner";
  banner.style.cssText =
    "position:fixed;" +
    "top:0;left:0;width:100%;" +
    "background:#2b6cb0;" +
    "color:#ffffff;" +
    "text-align:center;" +
    "padding:18px 20px;" +
    "font-family:Arial,sans-serif;" +
    "font-size:17px;" +
    "z-index:9999;" +
    "box-shadow:0 4px 16px rgba(0,0,0,0.25);" +
    "transform:translateY(-100%);" +
    "transition:transform 0.5s ease;";

  banner.innerHTML =
    "<span style='font-size:22px;'>🚌</span> " +
    "<strong>Welcome to  Bus Booking!</strong> " +
    "We are happy to have you here — book your journey with ease. " +
    "<span style='font-size:22px;'>🎟️</span>" +
    "<button id='greet-close' style='" +
      "margin-left:20px;" +
      "background:#ffffff;" +
      "color:#2b6cb0;" +
      "border:none;" +
      "padding:6px 16px;" +
      "border-radius:6px;" +
      "font-weight:bold;" +
      "font-size:14px;" +
      "cursor:pointer;'" +
    ">✕ Close</button>";

  document.body.appendChild(banner);

  // Slide in after a short delay
  setTimeout(function () {
    banner.style.transform = "translateY(0)";
  }, 300);

  // Auto-hide after 6 seconds
  var autoHide = setTimeout(function () {
    hideBanner();
  }, 6000);

  // Close button
  document.getElementById("greet-close").addEventListener("click", function () {
    clearTimeout(autoHide);
    hideBanner();
  });

  function hideBanner() {
    banner.style.transform = "translateY(-100%)";
    setTimeout(function () {
      banner.style.display = "none";
    }, 500);
  }

});
