window.addEventListener("DOMContentLoaded", function () {

  // ===== OVERLAY =====
  var overlay = document.createElement("div");
  overlay.id = "greet-overlay";
  overlay.style.cssText =
    "position:fixed;" +
    "top:0;left:0;width:100%;height:100%;" +
    "background:rgba(0,0,0,0.55);" +
    "z-index:9999;" +
    "display:flex;" +
    "align-items:center;" +
    "justify-content:center;" +
    "animation:greetFadeIn 0.4s ease;";

  // ===== KEYFRAME ANIMATIONS =====
  var style = document.createElement("style");
  style.textContent =
    "@keyframes greetFadeIn { from { opacity:0; } to { opacity:1; } }" +
    "@keyframes greetSlideUp { from { transform:translateY(50px); opacity:0; } to { transform:translateY(0); opacity:1; } }";
  document.head.appendChild(style);

  // ===== POPUP BOX =====
  var box = document.createElement("div");
  box.id = "greet-box";
  box.style.cssText =
    "background:#ffffff;" +
    "border:3px solid #2b6cb0;" +
    "border-radius:16px;" +
    "padding:44px 48px;" +
    "max-width:460px;" +
    "width:92%;" +
    "text-align:center;" +
    "box-shadow:0 16px 50px rgba(0,0,0,0.25);" +
    "font-family:Arial,sans-serif;" +
    "animation:greetSlideUp 0.45s ease;";

  // ===== ICON =====
  var icon = document.createElement("div");
  icon.textContent = "🚌";
  icon.style.cssText = "font-size:60px;margin-bottom:12px;";

  // ===== HEADING =====
  var heading = document.createElement("h2");
  heading.textContent = "Welcome to Bus Booking!";
  heading.style.cssText = "color:#2b6cb0;font-size:26px;margin-bottom:10px;";

  // ===== MESSAGE =====
  var message = document.createElement("p");
  message.innerHTML =
    "We are glad to have you here! 😊<br>" +
    "Explore our routes, check fares, and book your<br>" +
    "journey across <strong>Kenya</strong> — fast and easy.";
  message.style.cssText =
    "color:#4a5568;font-size:15px;line-height:1.8;margin-bottom:22px;";

  // ===== DIVIDER =====
  var hr = document.createElement("hr");
  hr.style.cssText = "border:1px solid #bee3f8;margin:0 0 20px 0;";

  // ===== OFFER BOX =====
  var offer = document.createElement("div");
  offer.innerHTML =
    "🎉 <strong>Special Deal:</strong> Book <strong>3+ seats</strong> and get a " +
    "<strong style='color:#2c5282;font-size:16px;'>16% DISCOUNT!</strong>";
  offer.style.cssText =
    "background:#ebf8ff;" +
    "border:1px solid #2b6cb0;" +
    "border-radius:8px;" +
    "padding:12px 16px;" +
    "color:#2b6cb0;" +
    "font-size:14px;" +
    "margin-bottom:24px;" +
    "line-height:1.8;";

  // ===== BUTTON =====
  var btn = document.createElement("button");
  btn.textContent = "Let's Go! 🎟️";
  btn.style.cssText =
    "background:#2b6cb0;color:#ffffff;border:none;" +
    "padding:14px 0;width:100%;font-size:17px;" +
    "font-weight:bold;border-radius:8px;cursor:pointer;" +
    "transition:background 0.2s,transform 0.15s;";
  btn.addEventListener("mouseover", function () {
    btn.style.background = "#2c5282";
    btn.style.transform = "scale(1.02)";
  });
  btn.addEventListener("mouseout", function () {
    btn.style.background = "#2b6cb0";
    btn.style.transform = "scale(1)";
  });

  // ===== CLOSE NOTE =====
  var note = document.createElement("p");
  note.textContent = "Press Esc or click outside to close";
  note.style.cssText = "color:#a0aec0;font-size:12px;margin-top:12px;";

  // ===== ASSEMBLE =====
  box.appendChild(icon);
  box.appendChild(heading);
  box.appendChild(message);
  box.appendChild(hr);
  box.appendChild(offer);
  box.appendChild(btn);
  box.appendChild(note);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // ===== CLOSE LOGIC =====
  function closePopup() {
    overlay.style.transition = "opacity 0.3s ease";
    overlay.style.opacity = "0";
    setTimeout(function () {
      overlay.style.display = "none";
    }, 300);
  }

  btn.addEventListener("click", closePopup);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closePopup();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopup();
  });

});
