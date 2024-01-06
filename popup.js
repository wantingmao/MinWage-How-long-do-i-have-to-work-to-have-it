document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("button1").addEventListener("click", function(){
  //  alert("button has been clicked")
    var body = document.getElementsByTagName("body")[0].style.backgroundColor = "aqua"
  });

});

// document.addEventListener("DOMContentLoaded", function(){
//
//   // Get the toggle button element
//   const toggleBtn = document.querySelector('input[type="checkbox"]');
//
//   // Listen for click events on the toggle button
//   toggleBtn.addEventListener("click", function(){
//
//     // Send a message to the background script to toggle the extension state
//     chrome.runtime.sendMessage({ action: "click" });
//
//     // Get the body element
//     const body = document.getElementsByTagName("body")[0];
//
//     // Toggle the "disabled" class on the body element
//     body.classList.toggle("disabled");
//
//     // Toggle the "checked" attribute on the toggle button
//     toggleBtn.toggleAttribute("checked");
//   });
//
// });

// document.addEventListener("DOMContentLoaded", function(){
//   var toggle = document.querySelector('input[type="checkbox"]');
//   toggle.checked = !isExtensionOn;
//
//   toggle.addEventListener("change", function(){
//     // Send a message to the background script to toggle the extension state
//     chrome.runtime.sendMessage({ action: "toggleExtension" });
//   });
// });


// document.addEventListener("DOMContentLoaded", function(){
//
//   // Get the initial extension state from the storage
//   chrome.storage.sync.get("isExtensionOn", function(data) {
//     let isExtensionOn = data.isExtensionOn;
//     console.log("Initial extension state:", isExtensionOn);
//
//     // Set the initial toggle button state based on the extension state
//     let toggleButton = document.querySelector(".toggle-container input[type='checkbox']");
//     toggleButton.checked = isExtensionOn;
//
//     // Add a click event listener to the toggle button
//     toggleButton.addEventListener("click", function(){
//       // Update the extension state in the storage
//       isExtensionOn = !isExtensionOn;
//       chrome.storage.sync.set({ "isExtensionOn": isExtensionOn }, function() {
//         console.log("Extension state:", isExtensionOn);
//       });
//     });
//   });
//
// });

// const toggleSwitch = document.getElementById("toggle-switch");
// Global variable to keep track of whether the extension is enabled
// let isExtensionOn = false;
//
// // Retrieve the extension state from storage on startup
// chrome.storage.sync.get('isExtensionOn', function(data) {
//   if (typeof data.isExtensionOn !== 'undefined') {
//     isExtensionOn = data.isExtensionOn;
//     updateToggleButton();
//   }
// });
//
// // Handle button clicks
// document.getElementById('toggleButton').addEventListener('click', function() {
//   isExtensionOn = !isExtensionOn;
//   console.log("Extension state:", isExtensionOn);
//
//   // Store the updated state in storage
//   chrome.storage.sync.set({isExtensionOn: isExtensionOn}, function() {
//     console.log('Extension state saved to storage');
//   });
//
//   // Send a message to the background script to update the extension state
//   chrome.runtime.sendMessage({ action: "toggleExtension", isEnabled: isExtensionOn });
// });
//
// // Update the toggle button based on the extension state
// function updateToggleButton() {
//   let toggleButton = document.getElementById('toggleButton');
//   toggleButton.textContent = isExtensionOn ? "Disable" : "Enable";
// }
//
// // Listen for messages from the background script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("Received message:", request);
//   if (request.action === "updateButton") {
//     isExtensionOn = request.isEnabled;
//     updateToggleButton();
//   }
// });
