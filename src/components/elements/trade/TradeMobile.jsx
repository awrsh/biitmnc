import React, { useState } from "react";
import Counter from "./Counter";
import StopForm from "./spotForm/StopForm";

const btns = [
  {
    id: 0,
    name: "Buy",
  },
  {
    id: 1,
    name: "Sell",
  },
];
const TradeMobile = () => {
  const [clicked, setClicked] = useState(0);
  const onClickBtn = (id) => {
    if (clicked === id) return;
    setClicked(id);
  };
  return (
    <div className="d-flex d-md-none mt-4">
      <div className="px-3" style={{ flex: 1 }}>
        <div className="d-flex bg-dark container_btns_trade">
          {btns.map((btn, i) => (
            <button
              onClick={() => onClickBtn(btn.id)}
              key={btn.id}
              className={`${clicked === i ? "active" : ""}`}
            >
              {btn.name}
            </button>
          ))}
        </div>
        <Counter />
        <p>$0.83</p>
        <Counter />
        <StopForm />
      </div>
      <div style={{ flex: 1 }}>
        <div className="px-3">
          <div className="d-flex gap-3 mt-2 justify-content-between align-items-center">
            <p style={{ fontSize: "11px", fontWeight: "bold" }}>Price(USDT)</p>
            <p style={{ fontSize: "11px", fontWeight: "bold" }}>Amount(MX)</p>
          </div>

          {Array.from({ length: 10 }).map((i, index) => (
            <div
              key={index}
              style={{
                fontFamily: "IBM-FONT",
                fontSize: "11px",
                padding: "1px 3px",
                fontWeight: "bold"
              }}
              className="d-flex w-100 my-2 justify-content-between position-relative align-items-center"
            >
              <div style={{ background: "#05c48e", opacity: ".4", right: 0, width: `${50 + index}%` }} className="position-absolute py-2"></div>
              <p className="p-0 m-0">0.8367</p>
              <p className="p-0  text-white m-0" style={{fontFamily: "Binance-medium"}}>
                12.270
              </p>
            </div>
          ))}
          {Array.from({ length: 10 }).map((i, index) => (
            <div
              key={index}
              style={{
                fontFamily: "IBM-FONT",
                fontSize: "11px",
                padding: "1px 3px",
                fontWeight: "bold"
              }}
              className="d-flex w-100 my-2 justify-content-between position-relative align-items-center"
            >
              <div style={{ background: "#df473d", opacity: ".4", right: 0, width: `${90 - index}%` }} className="position-absolute py-2"></div>
              <p className="p-0 m-0">0.8367</p>
              <p className="p-0  text-white m-0" style={{fontFamily: "Binance-medium"}}>
                12.270
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeMobile;
