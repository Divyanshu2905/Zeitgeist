import { combineReducers } from "redux";
import getprofileReducer from "./Reducers/profileReducer";
import getuserReducer from "./Reducers/userReducer";
import geteventsReducer from "./Reducers/eventsReducer";
import getcaReducer from "./Reducers/caReducer";
import getleadersReducer from "./Reducers/leaderboardReducer";
import getAnnouncementReducer from "./Reducers/announcementReducer";

export default combineReducers({
  user: getuserReducer,
  profile: getprofileReducer,
  events: geteventsReducer,
  ca: getcaReducer,
  leaderboard: getleadersReducer,
  announcement: getAnnouncementReducer,
});
