// Business Logic
// function hideResults() {
//   document.getElementById("fork").setAttribute("class", "hidden");
//   document.getElementById("spoon").setAttribute("class", "hidden");
//   document.getElementById("knife").setAttribute("class", "hidden");
//   document.getElementById("plate").setAttribute("class", "hidden");
//   document.getElementById("bowl").setAttribute("class", "hidden");
// }
function clearForm() {
  document.getElementById("name").value = null;
  document.getElementById("address").value = null;
}



// User Interface Logic
function handleSelected(event) {
  event.preventDefault();
  const selection = document.querySelector("select#items").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  
  let result;
  if (selection === "fork") {
    result = "thank you " + name + " for purchasing a " + selection  + "! Your order costs 2$ and will be delivered to " + address + " !";
  } else if (selection === "spoon") {
    result = "thank you " + name + " for purchasing a " + selection  + "! Your order costs 3$ and will be delivered to " + address + " !";
  } else if (selection === "knife") {
    result = "thank you " + name + " for purchasing a " + selection  + "! Your order costs 4$ and will be delivered to " + address + " !";
  } else if (selection === "plate") {
    result = "thank you " + name + " for purchasing a " + selection  + "! Your order costs 5$ and will be delivered to " + address + " !";
  } else if (selection === "bowl") {
    result = "thank you " + name + " for purchasing a " + selection  + "! Your order costs 6$ and will be delivered to " + address + " !";
  }

  clearForm();
  

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("input");
  form.addEventListener("submit", handleSelected);
});