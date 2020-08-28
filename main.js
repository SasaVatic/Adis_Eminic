console.log("It works");

$(document).ready(function () {
  $("#send-btn").click(function (event) {
    console.log("Clicked button");

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var subject = $("#subject-input").val();
    var message = $("#message").val();
    var statusElement = $("#status");
    statusElement.empty();

    if (name.length >= 2) {
      statusElement.append("<div>Name is valid</div>");
    } else {
      event.preventDefault();
      statusElement.append(
        "<div>* Name must contain at least 2 characters</div>"
      );
    }

    if (email.length >= 6 && email.includes("@") && email.includes(".")) {
      statusElement.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElement.append(
        "<div>* Email must include '@', ' . ' and at least 4 characters</div>"
      );
    }

    if (subject.length >= 2) {
      statusElement.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElement.append(
        "<div>* Subject must contain at least 2 characters</div>"
      );
    }

    if (message.length >= 10) {
      statusElement.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElement.append(
        "<div>* Message must contain at least 10 characters</div>"
      );
    }
  });
});
