// functions
function upateDate() {
    const date = new Date();
    dateEmp = document.getElementById("dateEml");
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateEmp.innerText = date.toLocaleDateString("en-us", options);
  }