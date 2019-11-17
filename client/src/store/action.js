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

export const saveLocation = name => {
  console.log(name);
  return {
    type: "SET_LOCATION",
    name: name
  };
};

export const handleModal = (shouldBeOn, waypoint) => {
  return {
    type: "MODAL_ACTION",
    shouldBeOn: shouldBeOn,
    waypoint: waypoint
  };
};
