import {useState} from "react";
import "./App.css";
import Row from "./components/base/Row";
import Spinner from "./components/Spinner";
import ApiCaller from "./components/ApiCaller";
import {Status, Url} from "./types";



const App = () => {
  const [urls, setUrls] = useState<Array<Url>>([
    {id: 1, text: "", status: null},
    {id: 2, text: "", status: null},
    {id: 3, text: "", status: null},
  ]);

  const [status, setStatus] = useState<null|Status>(null);

  const handleChange = (value: string, url: Url) => {
    const newUrls = urls.map(url => ({...url}));
    const index = newUrls.findIndex(item => item.id === url.id);

    newUrls[index].text = value;

    setUrls(newUrls);
  };

  const sendRequest = (url: Url) => {
    const newUrls = urls.map(url => ({...url}));
    const index = newUrls.findIndex(item => item.id === url.id);

    newUrls[index].status = "loading";

    setStatus("loading");

    setUrls(newUrls);

    setTimeout(() => {
      const newUrls = [...urls];
      const index = newUrls.indexOf(url);

      newUrls[index].status = "success";

      const noReqLoading = newUrls.every(url => url.status !== "loading");

      if (noReqLoading) setStatus(null);

      setUrls(newUrls);
    }, 3000);
  };


  return (
    <div className="App">
      <Row>
        <h1 style={{marginRight: "1em"}}>All Urls</h1>

        <Spinner status={status!}/>
      </Row>

      <ul className="list">
        {urls.map(url => (
          <li key={url.id} className="list-item">
            <ApiCaller
              url={url}
              onChange={value => handleChange(value, url)}
            />

            <button
              style={{marginRight: "1em"}}
              onClick={() => sendRequest(url)}
            >
              send request
            </button>

            <Spinner status={url.status!}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
