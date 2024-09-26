import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

import useTitle from "../../customHooks/useTitle";

// import LoadingSpinner from "../../components/LoadingSpinner";
// import NoDataFound from "../../components/NoDataFound";

// const headings = ["Name", "Price", "Brand", "Actions"];

const DashboardMain: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Dashboard");

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
    </div>
  );
};

export default DashboardMain;
