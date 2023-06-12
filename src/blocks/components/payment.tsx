const Payment = () => {
  return (
    <div className="w-full h-[fit-content] lg:flex-1 bg-[#ffecf1] p-[15px] text-xl font-[500] flex flex-col gap-3">
      <div>Cart totals</div>
      <div className="w-full flex justify-between">
        <div>$49.65</div>
        <div className="text-[#b9b9b9] font-[300] flex">
          <div className="line-through">$99.99 </div>
          <div> 50% off</div>
        </div>
      </div>
      <div className="w-full cursor-pointer text-lg font-normal h-12 flex justify-center items-center text-white bg-[#e96269] rounded">
        Check Out
      </div>
      <div className="w-full h-12 flex items-center mt-1">
        <input
          className="h-full text-sm font-light w-[80%] rounded-tl rounded-bl focus:border-[0px] focus:outline-[0px] border-[1px] p-3 border-[#e96269]"
          type="text"
          placeholder="Enter Coupon"
        />
        <div className="flex-1 h-full cursor-pointer text-lg font-normal flex justify-center items-center text-white bg-[#e96269] rounded-tr rounded-br">
          Apply
        </div>
      </div>
    </div>
  );
};

export default Payment;
