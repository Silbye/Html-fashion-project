async function doFeatured() {
    try {
        const response = await fetch("scripts/featured.json");
        console.log(response);
        if (!response.ok) {
            throw new Error(`Could not receive data from ${"scripts/featured.json"}`);
        }
        const data = await response.json();
        const featuredItems = document.querySelector(".featured-items");
        data.forEach(({ imgUrl, itemTitle, itemText, itemPrice }) => {
            const featuredItem = `
            <div class="featured-item">
              <div class="featured-item-container">
                <img
                  src="${imgUrl}"
                  alt="Featured"
                  class="featured-image"
                />
                <div class="featured-hover">
                  <div class="featured-hover-box add-to-cart-button">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z"
                        fill="white"
                      /></svg
                    >Add to Cart
                  </div>
                </div>
              </div>
              <div class="featured-item-info">
                <div class="featured-item-title">${itemTitle}</div>
                <div class="featured-item-text">
                  ${itemText}
                </div>
                <div class="featured-item-price">${itemPrice}</div>
              </div>
            </div>
          `;
            featuredItems.insertAdjacentHTML("beforeend", featuredItem);
        });
    } catch (error) {
        console.log(error);
    }
}

function createCartItem(featured_item) {
    featured_item.setAttribute("id", "cart-item");
    const featured_item_title = document
        .querySelector("#cart-item")
        .querySelector(".featured-item-title").textContent;
    const featured_item_price = document
        .querySelector("#cart-item")
        .querySelector(".featured-item-price").textContent;
    const featured_image = document
        .querySelector("#cart-item")
        .querySelector(".featured-image").src;
    console.log(featured_item);
    console.log(featured_item_title);
    console.log(featured_item_price);
    console.log(featured_image);

    const new_cart_item = `
  <div class="cart-item">
    <div class="cart-item-image">
      <img src="${featured_image}" alt="" />
    </div>
    <div class="cart-item-info">
      <div class="cart-item-title">${featured_item_title}</div>
      <div class="cart-item-text main-page-cart-price">Price: ${featured_item_price}</div>
      <div class="cart-item-text">Color:</div>
      <div class="cart-item-text">Size:</div>
      <div class="cart-item-text">Quantity:</div>
    </div>
    <svg class="remove-item-button" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
        fill="#575757"/>
    </svg>
  </div>`;
    return new_cart_item;
}

function removeCartItems() {
    const cart = document.querySelector(".main-page-cart");
    if (document.querySelectorAll(".remove-item-button") !== null) {
        let remove_item_buttons = document.querySelectorAll(".remove-item-button");
        remove_item_buttons.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                let cart_item = event.target.closest(
                    ".remove-item-button"
                ).parentElement;
                cart_item.remove();
                if (cart.querySelector(".cart-item") === null) {
                    cart.classList.add("hidden");
                }
            });
        });
    }
}

async function mainPageCart() {
    await doFeatured();
    const buttons = document.querySelectorAll(".add-to-cart-button");
    const cart_items = document.querySelector(".cart-items");
    const cart = document.querySelector(".main-page-cart");
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            let featured_item = event.target.closest(".add-to-cart-button")
                .parentElement.parentElement.parentElement;
            new_cart_item = createCartItem(featured_item);
            cart_items.insertAdjacentHTML("beforeend", new_cart_item);
            if (cart.classList.contains("hidden")) {
                cart.classList.remove("hidden");
            }
            featured_item.removeAttribute("id");
            removeCartItems();
        });
    });
}

mainPageCart();