import React, { useState } from "react";
import { formatPrice } from "../utils/utils";

function FormRange({ label, name, minRange, maxRange, size, price }) {
    const step = maxRange/100;
    const [selectedPrice, setSelectedprice] = useState(price || maxRange);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={minRange}
        max={maxRange}
        value={selectedPrice}
        onChange={(e)=>setSelectedprice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs mt-2 px-2">
        <span className="font-bold">Min: {minRange}</span>
        <span className="font-bold">Max: {formatPrice(maxRange)}</span>

      </div>
    </div>
  );
}

export default FormRange;
