const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

const initialState = {
  dark: false
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};