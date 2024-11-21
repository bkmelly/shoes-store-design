document.addEventListener("DOMContentLoaded", function () {
        const text = document.querySelector(".animated-text");
        text.classList.add("typing-animation");
      });
      const button = document.querySelector(".expand-button");

      button.addEventListener("click", function () {
        window.scroll({
          top: 955,
          left: 0,
          behavior: "smooth",
        });
      });

      // header Toggle
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");

  // Toggle dropdown on click
  dropdown.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});

// Temporary Price Change $ TO kSH
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const prices = document.querySelectorAll(".item-price"); // Select all elements with class 'price'

  // Function to generate a random price between min and max
  const randomizePrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Iterate through each price element and update its value
  prices.forEach(priceElement => {
    const newPrice = randomizePrice(500, 5000); // Set the range in Ksh
    priceElement.textContent = `Ksh ${newPrice.toLocaleString()}`; // Update with new price
  });
});






      