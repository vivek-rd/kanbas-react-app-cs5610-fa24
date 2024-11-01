import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentsControlButtons() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      <button className="btn border-dark">40% of total</button>
      {currentUser.role === "FACULTY" && (
        <Link to={`/Kanbas/Courses/${cid}/Assignments/0`}>
          <BsPlus size={35} />
        </Link>
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
