function validateForm() {
  let labelArr = [
    "name",
    "email",
    "age",
    "role",
    "language",
    "certifications",
    "technologies",
    "comment"
  ];
  let inputValues = {};
  labelArr.map(label => {
    inputValues[`${label}`] = document.forms["myForm"][`${label}`].value;
  });
  if (inputValues.length !== -1) {
    alert("This is just a demo =)");
    return true;
  }
}
