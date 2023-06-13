interface course_details_types {
  title: string;
  author: string;
  former: string;
  present: string;
  titleCover: any;
  authorCover: any;
}

import { MdOutlineCancelPresentation } from "react-icons/md";

const Course: React.FC<course_details_types> = ({
  title,
  author,
  former,
  present,
  titleCover,
  authorCover,
}) => {
  return (
    <div className="w-full bg-white p-[13px] border-slate-200 border-[1px] flex flex-wrap">
      <div className="w-full sm:flex gap-6 sm:w-[80%]">
        <div className="w-full sm:w-[120px] sm:h-[130px]">
          <img
            className="object-cover object-center w-full h-full rounded-[3px]"
            src={titleCover}
          />
        </div>
        <div className="w-full flex flex-col gap-4 justify-between sm:w-[70%]">
          <div className="capitalize leading-tight text-[21px] xl:text-[25px] font-[500] mt-2 sm:mt-0">
            {title}
          </div>
          <div className="w-full flex items-center gap-2">
            <img
              className="rounded-md w-9 h-9 object-cover object-center"
              src={authorCover}
            />
            <div className="capitalize text-slate-500 text-sm md:text-base">
              {author}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-between text-xl xl:text-2xl font-[500] mt-3 flex items-center md:flex-1">
        <div>
          <div>{`$${present}`}</div>
          <div className="text-slate-300 font-[400] line-through">{`$${former}`}</div>
        </div>
        <div className="text-red-600 cursor-pointer text-2xl flex items-center">
          <MdOutlineCancelPresentation />
        </div>
      </div>
    </div>
  );
};

export default Course;
