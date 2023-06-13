import { Course, Payment } from ".";
import dummy from "../assets/cs.webp";
import dummy1 from "../assets/sd.webp";

const Courses = () => {
  return (
    <div className="w-11/12 flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row gap-8 mt-[-47px] md:mt-[-53px]">
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
          <Course
            authorCover={dummy}
            titleCover={dummy1}
            title="statistics data science and business analysis"
            author="paul molive"
            present="100.00"
            former="150.00"
          />
          <Course
            authorCover={dummy}
            titleCover={dummy1}
            title="statistics data science and business analysis"
            author="paul molive"
            present="100.00"
            former="150.00"
          />
        </div>
        <Payment />
      </div>
    </div>
  );
};

export default Courses;
