import { Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "../pages/CA/Dashboard";

function makeid(length) {
  const navigate = useNavigate
  let result = "";
  const characters = "abcdefghijklmnopqrtstuvwxyz123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const ProtectedRoute = ({ isLoggedIn }) => {

  if (!isLoggedIn) {
    return (
      <Navigate
        to={"/campus-ambassador/login"}
        replace
      />
    );
  }
  return <Dashboard />;
};

export default ProtectedRoute;
