import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");

  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "listing";
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.appendChild(li);
  });
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

