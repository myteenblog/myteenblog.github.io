function subscribe() {
  const email = document.getElementById("emailInput").value;
  if (email === "") {
    document.getElementById("subscribeMessage").innerText = "Please enter an email.";
    return;
  }
  localStorage.setItem("subscriberEmail", email);
  document.getElementById("subscribeMessage").innerText =
    "Thank you for subscribing! 🎉";
}

function sendFeedback() {
  const feedback = document.getElementById("feedbackText").value;
  if (feedback === "") {
    document.getElementById("feedbackMessage").innerText =
      "Please write something first.";
    return;
  }
  localStorage.setItem("feedback", feedback);
  document.getElementById("feedbackMessage").innerText =
    "Thanks for your feedback ❤️";
}
