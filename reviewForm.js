window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank You for submitting the survey. Have a great day!");
      return false;
   }
}