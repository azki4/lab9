window.onload = function() {
  // Get the elements
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');

  // Add event listener to the button
  button.addEventListener('click', function() {
    // Show an alert box with the contents of the text field
    alert('Azkiya Tahreem: ' + input.value);

    // Change the value of the h2 below the button to have the text contents of the text input control
    output.textContent = input.value;
  });
};
