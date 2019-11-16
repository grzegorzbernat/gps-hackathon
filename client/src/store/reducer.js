const initialState = {
  isMenuToggled: false,
  categories: {
    wozek: false,
    sluch: false,
    wzrok: false,
    ruch: false,
    ciaza: false,
    dziecko: false,
    padaczka: false
  }
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuToggled: action.shouldBeOn };
    case "TOGGLE_CATEGORY":
      const currentCategory = state.categories;
      currentCategory[action.name] = action.isToggled;
      console.log(currentCategory);
      return { ...state, categories: currentCategory };
    default:
      return state;
  }
};

export default reducer;
