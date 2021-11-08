import "./App.css";

import { useGetCurrentWeatherDataQuery } from "./apis/weatherApi";

function App() {
  const { data, isFetching } = useGetCurrentWeatherDataQuery("london,uk");
  if (isFetching) return "Loading...";
  console.log(data);
  return <div>Done</div>;
}

export default App;
