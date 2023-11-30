const initialState = {
  result: {
      email: "",
  }
};
export default function getcaReducer(state = initialState, action) {
  switch (action.type) {
      case "GET_CA_ACTION":
          if (action.payload == null) {
              return state;
          }
          return {
              result: action.payload
          };
      default:
          return state;
  }
}