import {FC} from "react";
import {Status} from "../types";
import "./Spinner.css";

interface SpinnerProps {
  status: Status
}

const Spinner:FC<SpinnerProps> = ({status}) => {
  if (status === "loading")
    return <div className="loader"/>;
  else if (status === "error")
    return (
      <i
        className="fa fa-exclamation-circle"
        style={{color: "red", fontSize: "2em"}}
        aria-hidden="true"
      />
    );
  else if (status === "success")
    return (
      <i
        className="fa fa-check"
        style={{color: "green", fontSize: "2em"}}
        aria-hidden="true"
      />
    );
  return null;
};

export default Spinner;
