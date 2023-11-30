const initialState = {
  result: [],
};
export default function getAnnouncementReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ANNOUNCEMENT_ACTION":
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
