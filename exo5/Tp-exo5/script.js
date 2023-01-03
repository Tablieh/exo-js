function convert() {
    // Get the value in the euros input field
    let euros = document.getElementById("euros").value;

    // Check if the input is a number
    if (isNaN(euros)) {
      document.getElementById("francs").innerHTML = "It is absolutely necessary to enter a numerical value.";
    } else {
      // Convert euros to francs and round to 2 decimal places
      let francs = Math.round((euros * 6.55957) * 100) / 100;
      // Display the result in the francs span element
      document.getElementById("francs").innerHTML = francs + " francs";
    }
  }