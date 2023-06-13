import { Course, Payment } from ".";
import dummy from "../assets/cs.webp";
import dummy1 from "../assets/ds.webp";
import dummy2 from "../assets/sd.webp";
import dummy3 from "../assets/pr1.webp";
import dummy4 from "../assets/pr2.webp";
import dummy5 from "../assets/pr3.webp";

const Courses = () => {
  return (
    <div className="w-11/12 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row gap-8 mt-[-47px] md:mt-[-53px]">
        <div className="w-full md:w-[67%] xl:w-[71%] flex flex-col gap-8">
          <Course
            authorCover={dummy3}
            titleCover={dummy}
            title="statistics data science and business analysis"
            author="paul molive"
            present="100.00"
            former="150.00"
          />
          <Course
            authorCover={dummy4}
            titleCover={dummy1}
            title="statistics data science and business analysis"
            author="paul molive"
            present="100.00"
            former="150.00"
          />
          <Course
            authorCover={dummy5}
            titleCover={dummy2}
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
