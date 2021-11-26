export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "GET_TIEDOT":
      return {
        ...state,
        tiedot: payload,
      };
    case "GET_TIETO":
      return {
        ...state,
        tiedot: payload,
      };
    case "DELETE_TIETO":
      return {
        ...state,
        tiedot: state.tiedot.filter((tieto) => tieto.id !== action.payload),
      };
    case "ADD_TIETO":
      return {
        ...state,
        tiedot: [action.payload, ...state.tiedot],
      };
    case "EDIT_TIETO":
      return {
        ...state,
        tiedot: state.tiedot.map((tieto) =>
          tieto.id === action.payload.id
            ? (tieto.id = action.payload.id)
            : tieto
        ),
      };
    default:
      return state;
  }
};
