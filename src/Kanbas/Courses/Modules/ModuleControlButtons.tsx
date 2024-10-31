import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleID: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
          ></FaPencil>
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
          ></FaTrash>
        </>
      )}

      <GreenCheckmark />
      {currentUser.role === "FACULTY" && <BsPlus size={35} />}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
