"use client";
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "../../components/Admin/DashboardHero";
import Heading from "../../utils/Heading";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Kuzsera - Admin"
        description="Kuzsera is a platform for students to learn and get help from teachers"
        keywords="Programming, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <CourseAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;