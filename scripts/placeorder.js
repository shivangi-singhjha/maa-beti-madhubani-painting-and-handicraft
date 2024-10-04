document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("order-form");

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Here you can add further processing, such as sending the order details to a server

    // For this example, let's just alert the order details
    alert(
      `Order placed!\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}`
    );
    window.location.href = "../index.html";

    clearWishlist();
  });
});
