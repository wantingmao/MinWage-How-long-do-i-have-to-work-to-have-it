// Get all price elements
let priceElements = document.querySelectorAll('span._cDEzb_p13n-sc-price_3mJ9Z,li.a-carousel-card span.a-price, span.a-price, div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons span.price, span.a-size-base.a-color-price, span#mbc-price-1.a-size-medium.a-color-price, span#mbc-price-2.a-size-medium.a-color-price, span#mbc-price-3.a-size-medium.a-color-price, span.a-size-mini.a-color-price.aok-nowrap, span.a-color-price._p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU');

// Loop over each price element
priceElements.forEach(priceElement => {
  // Get the price value
  let priceText = priceElement.textContent.trim();
  let priceValue = parseFloat(priceText.slice(1).replace(/,/g, ''));

  // Calculate the number of hours and minutes worked
  let hours = Math.floor(priceValue / 15);
  let minutes = Math.round((priceValue / 15 - hours) * 60);

  // Format the output string
  let outputString = '';

  if (hours === 0 && minutes === 0) {
    outputString = '<1 min';
  } else if (hours === 0) {
    outputString = `${minutes} min`;
  } else if (minutes === 0) {
    outputString = `${hours} hr`;
  } else {
    outputString = `${hours} hr ${minutes} min`;
  }

  // Update the price element with the new value
  priceElement.textContent = outputString;
});



// // Listen for messages from background.js
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "modify_price") {
//     // Get all price elements
//     let priceElements = document.querySelectorAll('span._cDEzb_p13n-sc-price_3mJ9Z,li.a-carousel-card span.a-price, span.a-price, div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons span.price, span.a-size-base.a-color-price, span#mbc-price-1.a-size-medium.a-color-price, span#mbc-price-2.a-size-medium.a-color-price, span#mbc-price-3.a-size-medium.a-color-price, span.a-size-mini.a-color-price.aok-nowrap, span.a-color-price._p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU');
//
//     // Loop over each price element
//     priceElements.forEach(priceElement => {
//       // Get the price value
//       let priceValue = parseFloat(priceElement.textContent.slice(1));
//
//       // Calculate the number of hours and minutes worked
//       let hours = Math.floor(priceValue / 15);
//       let minutes = Math.round((priceValue / 15 - hours) * 60);
//
//       // Update the price element with the new value
//       if (hours === 0 && minutes === 0) {
//         priceElement.textContent = 'less than 1 min';
//       } else if (hours === 0) {
//         priceElement.textContent = `${minutes} min`;
//       } else if (minutes === 0) {
//         priceElement.textContent = `${hours} hrs`;
//       } else {
//         priceElement.textContent = `${hours} hrs ${minutes} min`;
//       }
//     });
//   }
// });

// // Check for a saved state in localStorage
// let savedState = localStorage.getItem('isEnabled');
// let isExtensionOn = savedState === null ? false : JSON.parse(savedState);
//
// //isExtensionOn = false;
//
// // Listen for messages from the background script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "isEnabled") {
//     // Send a message back with the extension state
//     sendResponse({ isEnabled: isExtensionOn });
//   } else if (request.action === "modifyPrice" && isExtensionOn) {
//     // Modify the price
//     let priceElements = document.querySelectorAll('span._cDEzb_p13n-sc-price_3mJ9Z,li.a-carousel-card span.a-price, span.a-price, div.a-row.a-carousel-controls.a-carousel-row.a-carousel-has-buttons span.price, span.a-size-base.a-color-price, span#mbc-price-1.a-size-medium.a-color-price, span#mbc-price-2.a-size-medium.a-color-price, span#mbc-price-3.a-size-medium.a-color-price, span.a-size-mini.a-color-price.aok-nowrap, span.a-color-price._p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU');
//     priceElements.forEach(priceElement => {
//       let priceValue = parseFloat(priceElement.textContent.slice(1));
//       let hours = Math.floor(priceValue / 15);
//       let minutes = Math.round((priceValue / 15 - hours) * 60);
//       if (hours === 0 && minutes === 0) {
//         priceElement.textContent = 'less than 1 min';
//       } else if (hours === 0) {
//         priceElement.textContent = `${minutes} min`;
//       } else if (minutes === 0) {
//         priceElement.textContent = `${hours} hrs`;
//       } else {
//         priceElement.textContent = `${hours} hrs ${minutes} min`;
//       }
//     });
//   }
// });

// // Check extension state on page load
// chrome.runtime.sendMessage({ action: "isEnabled" }, function(response) {
//   if (response.isEnabled) {
//     isExtensionOn = true;
//   }
// });
