// Get all the question elements
var questions = document.getElementsByClassName("faqs");

// Add click event listeners to each question
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    var answer = this.getElementsByClassName("answer")[0];
    var icon = this.getElementsByTagName("i")[0];

    // Toggle the answer visibility
    if (answer.style.display === "none") {
      answer.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      answer.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
}
