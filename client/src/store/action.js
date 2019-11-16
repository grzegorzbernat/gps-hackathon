export const toggleMenu = val => {
  return {
    type: "TOGGLE_MENU",
    shouldBeOn: val
  };
};

export const saveCategory = (name, isToggled) => {
  return {
    type: "TOGGLE_CATEGORY",
    name: name,
    isToggled: isToggled
  };
};
