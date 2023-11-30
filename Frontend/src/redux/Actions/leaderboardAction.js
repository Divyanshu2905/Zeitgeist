const getLeaderboard = (leaders) => dispatch => {
    dispatch({
        type: "GET_LEADERBOARD_ACTION",
        payload: leaders
    });
};

export default getLeaderboard;