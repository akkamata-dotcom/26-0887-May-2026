window.addEventListener("DOMContentLoaded", function () {

  var emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

  // ===== OVERLAY =====
  var overlay = document.createElement("div");
  overlay.id = "register-overlay";
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:2000;display:flex;align-items:center;justify-content:center;";

  // ===== POPUP BOX =====
  var popup = document.createElement("div");
  popup.style.cssText =
    "background:#ffffff;border:3px solid #2b6cb0;border-radius:12px;padding:36px 40px;max-width:480px;width:92%;box-shadow:0 10px 40px rgba(0,0,0,0.25);font-family:Arial,sans-serif;";

  // ===== HEADING =====
  var heading = document.createElement("h2");
  heading.textContent = "Register Your Details";
  heading.style.cssText = "color:#2b6cb0;text-align:center;margin-bottom:6px;font-size:22px;";
  popup.appendChild(heading);

  var subtext = document.createElement("p");
  subtext.textContent = "Fill in your details to continue booking.";
  subtext.style.cssText = "color:#718096;text-align:center;font-size:13px;margin-bottom:22px;";
  popup.appendChild(subtext);

  // ===== HELPER: create a form group =====
  function makeField(labelText, inputEl, errorId) {
    var group = document.createElement("div");
    group.style.cssText = "margin-bottom:16px;display:flex;flex-direction:column;";

    var label = document.createElement("label");
    label.textContent = labelText;
    label.style.cssText = "color:#2b6cb0;font-weight:bold;margin-bottom:6px;font-size:15px;";

    var errorSpan = document.createElement("span");
    errorSpan.id = errorId;
    errorSpan.style.cssText = "color:#c53030;font-size:13px;margin-top:4px;display:none;";

    group.appendChild(label);
    group.appendChild(inputEl);
    group.appendChild(errorSpan);
    return group;
  }

  var inputStyle =
    "padding:10px 14px;border:1px solid #bee3f8;border-radius:6px;background:#f0f4f8;color:#1a202c;font-size:14px;outline:none;";

  // ===== NAME FIELD =====
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "reg-name";
  nameInput.placeholder = "e.g. Stacey Wanjiru";
  nameInput.style.cssText = inputStyle;
  popup.appendChild(makeField("Name :", nameInput, "reg-name-err"));

  // ===== EMAIL FIELD =====
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "reg-email";
  emailInput.placeholder = "e.g. stacey20@gmail.com";
  emailInput.style.cssText = inputStyle;
  popup.appendChild(makeField("Email :", emailInput, "reg-email-err"));

  // ===== PHONE FIELD =====
  var phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.id = "reg-phone";
  phoneInput.placeholder = "e.g. 0712345678";
  phoneInput.style.cssText = inputStyle;
  popup.appendChild(makeField("Phone Number :", phoneInput, "reg-phone-err"));

  // ===== GENDER FIELD =====
  var genderSelect = document.createElement("select");
  genderSelect.id = "reg-gender";
  genderSelect.style.cssText = inputStyle;
  genderSelect.innerHTML =
    '<option value="">-- Select Gender --</option>' +
    '<option value="Male">Male</option>' +
    '<option value="Female">Female</option>' +
    '<option value="Prefer not to say">Prefer not to say</option>';
  popup.appendChild(makeField("Gender :", genderSelect, "reg-gender-err"));

  // ===== SUBMIT BUTTON =====
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.style.cssText =
    "width:100%;background:#2b6cb0;color:#ffffff;border:none;padding:13px;font-size:16px;font-weight:bold;border-radius:6px;cursor:pointer;margin-top:6px;";
  submitBtn.addEventListener("mouseover", function () {
    submitBtn.style.background = "#2c5282";
  });
  submitBtn.addEventListener("mouseout", function () {
    submitBtn.style.background = "#2b6cb0";
  });
  popup.appendChild(submitBtn);

  // ===== SUCCESS MESSAGE =====
  var successMsg = document.createElement("div");
  successMsg.style.cssText =
    "display:none;margin-top:16px;background:#c6f6d5;border:1px solid #276749;border-radius:6px;padding:14px;color:#276749;font-size:15px;text-align:center;";
  popup.appendChild(successMsg);

  // ===== VALIDATION & SUBMIT =====
  submitBtn.addEventListener("click", function () {
    var valid = true;

    ["reg-name-err", "reg-email-err", "reg-phone-err", "reg-gender-err"].forEach(function (id) {
      var el = document.getElementById(id);
      el.style.display = "none";
      el.textContent = "";
    });

    if (nameInput.value.trim() === "") {
      var nameErr = document.getElementById("reg-name-err");
      nameErr.textContent = "⚠️ Name is required.";
      nameErr.style.display = "block";
      valid = false;
    }

    var emailVal = emailInput.value.trim();
    var emailErr = document.getElementById("reg-email-err");
    if (emailVal === "") {
      emailErr.textContent = "⚠️ Email is required.";
      emailErr.style.display = "block";
      valid = false;
    } else if (!emailRegex.test(emailVal)) {
      emailErr.textContent = "⚠️ Invalid email. Use format like stacey20@gmail.com";
      emailErr.style.display = "block";
      valid = false;
    }

    var phoneVal = phoneInput.value.trim();
    var phoneErr = document.getElementById("reg-phone-err");
    if (phoneVal === "") {
      phoneErr.textContent = "⚠️ Phone number is required.";
      phoneErr.style.display = "block";
      valid = false;
    } else if (!/^[+]?[0-9]{9,13}$/.test(phoneVal)) {
      phoneErr.textContent = "⚠️ Enter a valid phone number (9–13 digits).";
      phoneErr.style.display = "block";
      valid = false;
    }

    var genderErr = document.getElementById("reg-gender-err");
    if (genderSelect.value === "") {
      genderErr.textContent = "⚠️ Please select a gender.";
      genderErr.style.display = "block";
      valid = false;
    }

    if (valid) {
      submitBtn.style.display = "none";
      successMsg.style.display = "block";
      successMsg.innerHTML =
        "✅ <strong>Thank you, " + nameInput.value.trim() + "!</strong><br>" +
        "Your details have been saved. You can now book your bus ticket.";

      setTimeout(function () {
        overlay.style.display = "none";
      }, 2500);
    }
  });

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
});
