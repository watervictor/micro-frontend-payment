import { Ads, Courses, Heading } from "../blocks";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center">
      <div className="w-full pb-11 md:pb-14 text-[#363636] bg-[#e9ebf0] flex justify-center items-center">
        <Heading />
      </div>
      <div className="w-full pb-14 text-[#363636] bg-[#ffffff] flex justify-center items-center">
        <Courses />
      </div>
      <div className="w-full pb-16 text-[#363636] bg-[#e9ebf0] flex justify-center items-center">
        <Ads />
      </div>
    </div>
  );
};

export default Layout;
