import { combineReducers } from "redux";
import getprofileReducer from "./Reducers/profileReducer";
import getuserReducer from "./Reducers/userReducer";
import getannouncementReducer from "./Reducers/announcementReducer";
import getcaReducer from './Reducers/caReducer'
import getleadersReducer from "./Reducers/leaderboardReducer";

export default combineReducers({
    user: getuserReducer,
    getprofile: getprofileReducer,
    getannouncement: getannouncementReducer,
    ca: getcaReducer,
    leaderboard: getleadersReducer
});