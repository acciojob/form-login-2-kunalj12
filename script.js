//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); //prevent form submission

  //get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  //display form values in alert message
  alert("FirstName: " + firstName + "\n LastName: "+ lastName + "\nPhone: " + phone + "\nEmail: " + email);
});
