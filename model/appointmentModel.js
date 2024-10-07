//!Match the object keys with the names of the input fields in the form
//!Remember: Any change in the input field name should be reflected here
//!Compulsory fields: firstName, lastName
function appointmentModel() {
  return {
    appointmentId: "",
    appointmentDate: "",
    height: "",
    weight: "",
    waistCircumference: "",
    bloodPressure: "",
    guidelines: "",
    notes: "",
  };
}

module.exports = appointmentModel;