window.addEventListener("DOMContentLoaded", function () {
  var overlay = document.createElement("div");
  overlay.id = "welcome-overlay";
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:1000;display:flex;align-items:center;justify-content:center;";

  var popup = document.createElement("div");
  popup.style.cssText =
    "background:#0a1f44;border:3px solid #ff6b6b;border-radius:12px;padding:36px 40px;max-width:460px;width:90%;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,0.6);";

  popup.innerHTML =
    '<p style="font-size:48px;margin-bottom:8px;">🚌</p>' +
    '<h2 style="color:#ff8a8a;font-size:24px;margin-bottom:12px;">Welcome to Bus Booking!</h2>' +
    '<p style="color:#f5f5f5;font-size:15px;line-height:1.8;margin-bottom:16px;">' +
    'We are glad to have you here.<br>' +
    'Book your journey across Kenya with ease — fast, affordable, and reliable.</p>' +
    '<hr style="border:1px solid #ff6b6b;margin:16px 0;">' +
    '<p style="color:#f5f5f5;font-size:14px;margin-bottom:6px;">🎉 <strong>Special Offer:</strong></p>' +
    '<p style="color:#bbdefb;font-size:13px;margin-bottom:20px;">' +
    'Book <strong style="color:#ff8a8a;">3 tickets</strong> together and get a ' +
    '<strong style="color:#ff6b6b;font-size:18px;">16% DISCOUNT</strong> on your total fare!</p>' +
    '<button id="welcome-close" style="background:#ff6b6b;color:#ffffff;border:none;padding:12px 32px;font-size:16px;font-weight:bold;border-radius:6px;cursor:pointer;">Let\'s Go!</button>';

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  document.getElementById("welcome-close").addEventListener("click", function () {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
