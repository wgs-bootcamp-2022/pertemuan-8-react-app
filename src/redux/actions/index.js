/** @format */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SUBMIT_FORM = "SUBMIT_FORM"
export function increaseCount() {
  return { type: "INCREMENT" };
}

export function decreaseCount() {
  return { type: "DECREMENT" };
}

export function resetCount() {
  return { type: "RESET" };
}

export function submitForm() {
  return { type: "SUBMIT_FORM" };
}
