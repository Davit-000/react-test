import {FC} from "react";
import {Url} from "../types";

interface ApiCallerProps {
  url: Url;
  onChange: (value: string) => void;
}

const ApiCaller: FC<ApiCallerProps> = ({url, onChange}) => {
  return (
    <label htmlFor={"apiUrl" + url.id} className="clickable">
      Enter a url:
      <input
        id={"apiUrl" + url.id}
        style={{margin: "0 1em"}}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default ApiCaller;
