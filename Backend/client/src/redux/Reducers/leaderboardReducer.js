const initialState = {
    result: {
        
    }
  };
  export default function getleadersReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_LEADERBOARD_ACTION":
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