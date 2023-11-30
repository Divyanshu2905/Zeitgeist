const getCaUser = (user) => dispatch => {
    dispatch({
        type: "GET_CA_ACTION",
        payload: user
    });
};

export default getCaUser;