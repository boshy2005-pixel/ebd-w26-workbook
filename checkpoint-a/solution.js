
import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * Returns every order from the database.
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * Returns orders from Cairo that have been paid.
 */
export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Cairo" && order.status === "paid"
  );
}

/**
 * Returns the total quantity of items across all orders.
 */
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

/**
 * Returns an order label, or a message if the order doesn't exist.
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `No order with id ${id}`;
  }
}

/**
 * Returns JSON text containing only each order's student and item.
 */
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(({ student, item }) => ({ student, item }))
  );
}
