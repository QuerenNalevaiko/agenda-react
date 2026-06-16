import { Navigate } from "react-router-dom";

function ProtegerRota({ identificado, children }) {
  if (!identificado) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtegerRota;
