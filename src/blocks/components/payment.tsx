import React from "react";
import visa from "../../assets/visa.webp";
import master from "../../assets/master.webp";
import disc from "../../assets/disc.webp";
import paypal from "../../assets/paypal.webp";

const Payment = () => {
  const [first, setFirst] = React.useState<boolean>(true);

  const toSecond = () => {
    setFirst(false);
  };

  return (
    <div className="w-full h-[fit-content] md:w-[320px] bg-[#ffecf1] p-[15px] text-xl font-[500] flex flex-col gap-3">
      {first ? (
        <>
          <div>Cart totals</div>
          <div className="w-full flex justify-between">
            <div>$49.65</div>
            <div className="text-[#b9b9b9] font-[300] flex">
              <div className="line-through">$99.99 </div>
              <div> 50% off</div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div>Cart Details</div>
          <div className="flex w-full justify-between">
            <img src={visa} />
            <img src={master} />
            <img src={disc} />
            <img src={paypal} />
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="w-full h-10 p-4 outline-none border-slate-300 border-[1px] font-[400] rounded-[3px] text-sm text-slate-500"
              type="text"
              placeholder="Name on card"
            />
            <input
              className="w-full h-10 p-4 outline-none border-slate-300 border-[1px] font-[400] rounded-[3px] text-sm text-slate-500"
              type="text"
              placeholder="Card number"
            />
            <input
              className="w-full h-10 p-4 outline-none border-slate-300 border-[1px] font-[400] rounded-[3px] text-sm text-slate-500"
              type="text"
              placeholder="Expiration date"
            />
            <input
              className="w-full h-10 p-4 outline-none border-slate-300 border-[1px] font-[400] rounded-[3px] text-sm text-slate-500"
              type="text"
              placeholder="Security code"
            />
          </div>
          <div className="w-full flex justify-between">
            <div>Total:</div>
            <div>$49.65</div>
          </div>
        </div>
      )}
      <div
        onClick={toSecond}
        className="w-full transition-all hover:shadow-red-300 hover:shadow-xl cursor-pointer text-lg font-normal h-12 flex justify-center items-center text-white bg-[#e96269] rounded">
        Check Out
      </div>
      {first ? (
        <>  
          <div className="w-full h-12 flex items-center mt-1">
            <input
              className="h-full text-sm font-light w-[70%] rounded-tl rounded-bl focus:border-[0px] focus:outline-[0px] border-[1px] p-3 border-[#e96269]"
              type="text"
              placeholder="Enter Coupon"
            />
            <div className="flex-1 transition-all hover:shadow-red-300 hover:shadow-xl h-full cursor-pointer text-lg font-normal flex justify-center items-center text-white bg-[#e96269] rounded-tr rounded-br">
              Apply
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Payment;
