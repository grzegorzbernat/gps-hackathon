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
  },
  isModalOpened: false,
  clickedWaypoint: null,
  location: "biblioteki"
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuToggled: action.shouldBeOn };
    case "TOGGLE_CATEGORY":
      const currentCategory = state.categories;
      currentCategory[action.name] = action.isToggled;
      return { ...state, categories: currentCategory };
    case "SET_LOCATION":
      return { ...state, location: action.name };
    case "MODAL_ACTION":
      return {
        ...state,
        isModalOpened: action.shouldBeOn,
        clickedWaypoint: action.waypoint
      };
    default:
      return state;
  }
};

export default reducer;
