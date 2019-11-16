export const toggleMenu = val => {
  console.log("click", val);
  return {
    type: "TOGGLE_MENU",
    shouldBeOn: val
  };
};
