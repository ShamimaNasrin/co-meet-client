/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import useTitle from "../../../customHooks/useTitle";
import NoDataFound from "../../../components/NoDataFound";
import LoadingSpinner from "../../../components/LoadingSpinner";

import toast from "react-hot-toast";
import {
  useFetchAllUserQuery,
  useModifyUserRoleMutation,
} from "../../../redux/features/user/userApi";

const headings = ["User Name", "Email", "Phone", "Role", "Actions"];
const UserManagement = () => {
  const { data: userData, isLoading } = useFetchAllUserQuery({});
  const [modifyUserRole] = useModifyUserRoleMutation();
  // console.log(userData);

  const handleRoleUpdate = async (userId: string, role: string) => {
    console.log(userId, role);
    try {
      await modifyUserRole({
        userId,
        updatedInfo: { role },
      }).unwrap();
      toast.success("user updated successfully!");
    } catch (err) {
      toast.error("Failed to update user");
      console.error("Error updating user", err);
    }
  };

  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("User Management");

  return (
    <div className="min-h-[70vh] xl:py-12 lg:py-10 py-7 xl:px-16 lg:px-16 md:px-10 px-7 bg-zinc-100">
      <h1 className="text-3xl font-bold mb-8 text-violet-600">
        User management
      </h1>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="mx-auto xl:w-[80%] lg:w-[80%] md:w-[70%] w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              {headings.map((h, i) => (
                <th key={i} className="border-b border-gray-700 px-2 py-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData?.data?.length ? (
              userData?.data?.map((item: any) => (
                <tr key={item?._id}>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.name}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.email}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.phone}
                  </td>

                  <td className="border-b border-gray-800 px-2 py-4">
                    {item?.role}
                  </td>
                  <td className="border-b border-gray-800 px-2 py-4">
                    <>
                      <button
                        onClick={() => handleRoleUpdate(item._id, "admin")}
                        className={`py-1 px-3 rounded ${
                          item.role === "admin"
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-green-500 text-white"
                        }`}
                        disabled={item.role === "admin"}
                      >
                        Make Admin
                      </button>
                    </>
                  </td>
                </tr>
              ))
            ) : (
              <NoDataFound />
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserManagement;
