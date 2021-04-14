import {FC} from "react";

const Row: FC = ({children}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export default Row;
