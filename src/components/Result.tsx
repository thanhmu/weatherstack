import React from "react";
interface IProps {
  data: any;
}

function Result({ data }: IProps) {
  const isRaining = data.current.weather_descriptions[0].includes("rain");
  return (
    <div>
      <p>Should I go outside? {isRaining ? "No": "Yes"}</p>
      <p>Should I wear sunscreen? {data.current.uv_index > 3 ? "Yes": "No"}</p>
      <p>Can I fly my kite? {!isRaining && data.current.wind_speed > 15 ? "Yes": "No"}</p>
    </div>
  );
}

export default Result;
