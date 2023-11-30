const initialState = {
  result: [],
};
export default function geteventsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_EVENTS_ACTION":
      if (action.payload == null) {
        return state;
      }
      return {
        result: action.payload,
      };
    default:
      return state;
  }
}
