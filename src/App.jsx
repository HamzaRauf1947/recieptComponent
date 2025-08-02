import { useState } from "react";
import {
  bulding4,
  calendar,
  dollarsquar,
  infocircle,
  locationbulk,
  LogoMobile,
  shopbulk,
  tasksquare,
} from "./assets/img";

function App() {
  return (
    <div style={{ boxSizing: "border-box" }} className="px-[16px] text-[#212121]">
      <div className="flex justify-center my-[40px_26px]">
        <img src={LogoMobile} alt="" />
      </div>
      <img src="" alt="" />
      <h2 className="text-2xl  font-semibold">John D.</h2>
      <h3 className="text-[14px] font-bold text-[#A0A0A0] my-[8px_12px]">
        H9023-3ABH902
      </h3>
      <h3 className="text-[14px]  font-semibold">Restaurant Name</h3>
      <div className="flex gap-3 my-[13px_25px]">
        <img src={shopbulk} width={24} alt="" />
        <p className="text-[14px]">Kelis’s Restaurant</p>
      </div>

      <p className="text-[14px] font-semibold">Pickup Address</p>

      <div className="flex gap-3 my-[13px_25px]">
        <img src={locationbulk} width={24} alt="" />
        <p className="text-[14px]">
          106 Arsenal Yards Blvd, Watertown, MA 02472
        </p>
      </div>

      <p className="text-[14px] font-semibold">Pickup Time</p>

      <div className="flex gap-3 my-[13px_25px]">
        <img src={calendar} width={24} alt="" />
        <p className="text-[14px]">Jul 12, 2025 06:30 PM</p>
      </div>

      <p className="text-[14px] font-semibold">items</p>
      <div className="flex gap-3 my-[13px_37px]">
        <img src={tasksquare} width={24} alt="" />
        <p className="text-[14px]">5</p>
      </div>

      <p className="text-[14px] font-semibold">Instruction</p>
      <div className="flex gap-3 my-[13px_25px]">
        <img src={infocircle} width={24} alt="" />
        <p className="text-[14px]">Call the customer before reaching him.</p>
      </div>

      <p className="text-[14px] font-semibold">Drop-off Address</p>
      <div className="flex gap-3 my-[13px_25px]">
        <img src={bulding4} width={24} alt="" />
        <p className="text-[14px]">Jul 12, 2025 07:00 PM</p>
      </div>

      <p className="text-[14px] font-semibold">Drop-off Time</p>
      <div className="flex gap-3 my-[13px_25px]">
        <img src={calendar} width={24} alt="" />
        <p className="text-[14px]">Jul 12, 2025 07:00 PM</p>
      </div>

      <div className="grid grid-cols-2">
        {/* left */}
        <div>
          <p className="text-[14px] font-semibold">Price</p>
          <div className="flex gap-3 my-[13px_25px]">
            <img src={dollarsquar} width={24} alt="" />
            <p className="text-[14px]">5</p>
          </div>
        </div>

        {/* right */}
       <div>
          <p className="text-[14px] font-semibold">Tip</p>
            <p className="text-[14px]  my-[13px_25px]">0</p>
        </div>
      </div>

      <p className="text-[14px] font-semibold mb-[32px]">Delivered to: <span className="font-normal">Leave at the door</span></p>



    </div>
  );
}

export default App;
