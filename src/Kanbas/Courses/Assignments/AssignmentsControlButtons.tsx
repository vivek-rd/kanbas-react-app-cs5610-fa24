import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <button className="btn border-dark">40% of total</button>
      <BsPlus size={35} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
