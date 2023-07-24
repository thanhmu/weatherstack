import React, { useState } from "react";
import "./App.css";
import fetchWeatherStackData from "./sevices";
import Result from "./components/Result";

interface IState {
  isLoading: boolean;
  data: any;
  error: string[];
}

function App() {
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState<IState>({
    isLoading: false,
    data: null,
    error: [],
  });

  const fetchData = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const res = await fetchWeatherStackData(zipcode);
      if (res.error) {
        setState({
          ...state,
          isLoading: false,
          error: [res.error?.info],
        });
      } else {
        setState({
          ...state,
          data: res,
          isLoading: false,
          error: [],
        });
      }

      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeZipcode = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(evt.target.value);
  };

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(evt.code);
    if (evt.code === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="App">
      <input
        value={zipcode}
        onChange={onChangeZipcode}
        onKeyDown={onKeyDown}
        placeholder="input then enter to see the result"
      />
      {state.error.length > 0 && <div>Error: {state.error[0]}</div>}
      {state.isLoading && <div>Loading...</div>}
      {!state.isLoading && state.data && <Result data={state.data} />}
    </div>
  );
}

export default App;
