import React from "react";
import { useState } from "react";
export default function BTCSlider({
  min,
  max,
  value,
  marks,
}) {
  const [select, setSelect] = useState(null);
  const onClick = (index)=>{
    if(select === index) return
    setSelect(index)
  }
  return (
    <div className="d-flex justify-content-between">
      {["25%", "50%", "75%"].map((item, index) => (
        <button
        onClick={()=>onClick(index)}
          style={{
            fontSize: "12px",
            width: "55px",
            borderRadius: "10px",
            background: select === index ? "#0096f5" : "",
            color: select === index ? "#fff" : "",
          }}
          className="py-1"
          key={item}
        >
          {item}
        </button>
      ))}
      {/* <CustomSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        getAriaValueText={valuetext}
        defaultValue={value}
        marks={marks}
        min={min}
        max={max}
      /> */}
    </div>
  );
}
