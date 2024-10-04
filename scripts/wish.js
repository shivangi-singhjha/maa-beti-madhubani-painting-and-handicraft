
// document.addEventListener('DOMContentLoaded', () => {
//     const wishlistButtons = document.querySelectorAll('.butt');

//     wishlistButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             const productCard = event.target.closest('.product-card');
//             const productInfo = {
//                 id: button.id,
//                 image: productCard.querySelector('img').src,
//                 brand: productCard.querySelector('.product-brand').textContent,
//                 description: productCard.querySelector('.product-short-des').textContent,
//                 price: productCard.querySelector('.price').textContent,
//             };

//             addToWishlist(productInfo);
//         });
//     });

//     function addToWishlist(product) {
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//         wishlist.push(product);
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//         // alert(`${product.brand} added to wishlist`);
//         renderWishlist(); // Render the updated wishlist
//     }

//     function removeItemFromWishlist(productId) {
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//         wishlist = wishlist.filter(item => item.id !== productId);
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//         renderWishlist(); // Render the updated wishlist
//     }

//     function clearWishlist() {
//         localStorage.removeItem('wishlist'); // Clear the wishlist from local storage
//         renderWishlist(); // Render the updated (empty) wishlist
//     }


//     function renderWishlist() {
//         const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if the user is logged in
//         const wishlistContainer = document.getElementById('wishlist-container');
//         const wishlistContainer2 = document.getElementById('wishlist-container2');
//         const totalPriceContainer = document.getElementById('total-price-container');

//         wishlistContainer2.innerHTML = "";
//         wishlistContainer.innerHTML = ''; // Clear the wishlist container

//         if (!isLoggedIn) {
//             wishlistContainer.innerHTML = '<p>Please log in to view your wishlist.</p>';
//             return;
//         }

//         // Check if totalPriceContainer exists before setting its innerHTML
//         if (totalPriceContainer) {
//             totalPriceContainer.innerHTML = ''; // Clear the total price container
//         }

//         const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//         let count = 0;
//         let totalPrice = 0;

//         wishlist.forEach(product => {
//             count += 1;
//             // Remove the currency symbol (assuming it's a $ sign) and parse the price as a float

//             totalPrice += parseFloat(product.price.replace('₹', ''));

//             const wishlistItem = document.createElement('div');
//             wishlistItem.classList.add('product-card');

//             wishlistItem.innerHTML = `
//                 <div class="product-image">
//                     <img src="${product.image}" class="product-thumb" alt="">
//                     <button class="card-btn rbutt" data-id="${product.id}">Remove from wishlist</button>
//                 </div>
//                 <div class="product-info">
//                     <h2 class="product-brand">${product.brand}</h2>
//                     <p class="product-short-des">${product.description}</p>
//                     <span class="price">${product.price}</span>
//                 </div>`;

//             const wishlistItem2 = document.createElement('div');
//             wishlistItem2.innerHTML = `<a href=PlaceOrder.html><div><button class="PlaceOrder">PLACE ORDER</button></a></div>`;

//             const removeButton = wishlistItem.querySelector('.rbutt');
//             removeButton.addEventListener('click', () => {
//                 removeItemFromWishlist(product.id);
//             });

//             wishlistContainer.appendChild(wishlistItem);
//             if (count === 1) {
//                 wishlistContainer2.appendChild(wishlistItem2);
//             }
//         });

//         // Create and append the total price div if totalPriceContainer exists
//         if (totalPriceContainer) {
//             const totalPriceDiv = document.createElement('div');
//             totalPriceDiv.classList.add('total-price');
//             totalPriceDiv.innerHTML = `<h3>Total Price: ₹${totalPrice}</h3>`;
//             totalPriceContainer.appendChild(totalPriceDiv);
//         }
//     }
//     renderWishlist(); // Render the initial wishlist
// });



document.addEventListener('DOMContentLoaded', () => {
    const wishlistButtons = document.querySelectorAll('.butt');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productInfo = {
                id: button.id,
                image: productCard.querySelector('img').src,
                brand: productCard.querySelector('.product-brand').textContent,
                description: productCard.querySelector('.product-short-des').textContent,
                price: productCard.querySelector('.price').textContent,
            };

            addToWishlist(productInfo);
        });
    });

    function addToWishlist(product) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderWishlist(); // Render the updated wishlist
    }

    function removeItemFromWishlist(productId) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderWishlist(); // Render the updated wishlist
    }

    function clearWishlist() {
        localStorage.removeItem('wishlist'); // Clear the wishlist from local storage
        renderWishlist(); // Render the updated (empty) wishlist
    }

    // Attach clearWishlist to the window object
    window.clearWishlist = clearWishlist;

    function renderWishlist() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if the user is logged in
        const wishlistContainer = document.getElementById('wishlist-container');
        const wishlistContainer2 = document.getElementById('wishlist-container2');
        const totalPriceContainer = document.getElementById('total-price-container');

        wishlistContainer2.innerHTML = "";
        wishlistContainer.innerHTML = ''; // Clear the wishlist container

        if (!isLoggedIn) {
            wishlistContainer.innerHTML = '<p>Please log in to view your wishlist.</p>';
            return;
        }

        if (totalPriceContainer) {
            totalPriceContainer.innerHTML = ''; // Clear the total price container
        }

        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let count = 0;
        let totalPrice = 0;

        wishlist.forEach(product => {
            count += 1;
            totalPrice += parseFloat(product.price.replace('₹', ''));

            const wishlistItem = document.createElement('div');
            wishlistItem.classList.add('product-card');

            wishlistItem.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" class="product-thumb" alt="">
                    <button class="card-btn rbutt" data-id="${product.id}">Remove from wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">${product.brand}</h2>
                    <p class="product-short-des">${product.description}</p>
                    <span class="price">${product.price}</span>
                </div>`;

            const wishlistItem2 = document.createElement('div');
            wishlistItem2.innerHTML = `<a href=PlaceOrder.html><div><button class="PlaceOrder">PLACE ORDER</button></a></div>`;

            const removeButton = wishlistItem.querySelector('.rbutt');
            removeButton.addEventListener('click', () => {
                removeItemFromWishlist(product.id);
            });

            wishlistContainer.appendChild(wishlistItem);
            if (count === 1) {
                wishlistContainer2.appendChild(wishlistItem2);
            }
        });

        if (totalPriceContainer) {
            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.classList.add('total-price');
            totalPriceDiv.innerHTML = `<h3>Total Price: ₹${totalPrice}</h3>`;
            totalPriceContainer.appendChild(totalPriceDiv);
        }
    }

    renderWishlist(); // Render the initial wishlist
});
