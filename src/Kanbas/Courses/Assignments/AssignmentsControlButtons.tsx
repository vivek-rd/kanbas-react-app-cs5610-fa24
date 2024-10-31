import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControlButtons() {
  const { cid } = useParams();
  return (
    <div className="float-end">
      <button className="btn border-dark">40% of total</button>
      <Link to={`/Kanbas/Courses/${cid}/Assignments/0`}>
        <BsPlus size={35} />
      </Link>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
