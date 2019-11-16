const initialState = {
  isMenuToggled: false
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  console.log(action);
  switch (type) {
    case "TOGGLE_MENU":
      console.log("toggle", action);

      return { ...state, isMenuToggled: action.shouldBeOn };
    default:
      return state;
  }
};

export default reducer;
