export const authReducer = (
  state = { name: "Test", role: "Seller" },
  action
) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
