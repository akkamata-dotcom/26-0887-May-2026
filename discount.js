window.addEventListener("DOMContentLoaded", function () {
  var overlay = document.createElement("div");
  overlay.id = "discount-overlay";
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:1000;display:flex;align-items:center;justify-content:center;";

  var popup = document.createElement("div");
  popup.id = "discount-popup";
  popup.style.cssText =
    "background:#0a1f44;border:3px solid #ff6b6b;border-radius:12px;padding:36px 40px;max-width:460px;width:90%;text-align:center;position:relative;box-shadow:0 10px 40px rgba(0,0,0,0.6);";

  popup.innerHTML =
    '<p style="font-size:48px;margin-bottom:8px;">🎉</p>' +
    '<h2 style="color:#ff8a8a;font-size:22px;margin-bottom:12px;">Special Group Offer!</h2>' +
    '<p style="color:#f5f5f5;font-size:16px;line-height:1.7;margin-bottom:20px;">' +
    'Book <strong style="color:#ff8a8a;">3 tickets</strong> together and enjoy a' +
    '<br><span style="font-size:36px;font-weight:bold;color:#ff6b6b;">16% DISCOUNT</span><br>' +
    'on your total fare!</p>' +
    '<p style="color:#bbdefb;font-size:13px;margin-bottom:24px;">Call us or book online to claim your deal.</p>' +
    '<button id="discount-close" style="background:#ff6b6b;color:#ffffff;border:none;padding:12px 32px;font-size:16px;font-weight:bold;border-radius:6px;cursor:pointer;">Got it!</button>';

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  document.getElementById("discount-close").addEventListener("click", function () {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
