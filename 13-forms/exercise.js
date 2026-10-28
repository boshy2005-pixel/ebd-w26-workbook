
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove the old cards.
  list.innerHTML = "";

  // Create and add one card for each item.
  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");
    priceParagraph.textContent = `${item.price} EGP`;

    card.append(heading, priceParagraph);
    list.append(card);
  });
}

/**
 * Connects the form to the product list.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  // The array holds our data, independently of the HTML.
  const items = [];

  form.addEventListener("submit", (event) => {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    const { name, price } = readForm();

    // Check that the product has a name.
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // Check that the price is a valid number greater than zero.
    const priceInput = document.querySelector("#price");

    if (
      priceInput.value.trim() === "" ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    // The input is valid, so save the item and redraw the page.
    error.textContent = "";
    items.push({ name, price });

    renderList(items);
    clearForm();
  });
}
