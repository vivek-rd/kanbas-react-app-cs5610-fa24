// import { FaPlus } from "react-icons/fa6";

// export default function AssignmentsControls() {
//   return (
//     <div id="wd-assignment-controls" className="text-nowrap">
//       <div className="input-group mb-3">
//         <input
//           id="wd-search-assignment"
//           placeholder="Search..."
//           className="form-control"
//         />
//       </div>
//       <button
//         id="wd-assignment-add"
//         className="btn btn-lg btn-danger me-1 float-end"
//       >
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Assignment
//       </button>
//       <div className="dropdown d-inline me-1 float-end">
//         <button
//           id="wd-assignment-group"
//           className="btn btn-lg btn-secondary me-1"
//           type="button"
//         >
//           <FaPlus
//             className="position-relative me-2"
//             style={{ bottom: "1px" }}
//           />
//           Group
//         </button>
//       </div>
//     </div>
//   );
// }

import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div
      id="wd-assignment-controls"
      className="d-flex justify-content-between align-items-center mb-3"
    >
      {/* Search Bar */}
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <span
          className="input-group-text bg-white "
          style={{ borderRight: "none" }}
        >
          <FaSearch />
        </span>
        <input
          id="wd-search-assignment"
          type="text"
          placeholder="Search..."
          className="form-control"
          style={{ backgroundColor: "white" }}
        />
      </div>

      {/* Buttons on the Right */}
      <div className="d-flex">
        {/* Group Button */}
        <div className="dropdown me-2">
          <button
            id="wd-assignment-group"
            className="btn btn-lg btn-secondary"
            type="button"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
        </div>

        {/* Assignment Button */}
        <button id="wd-assignment-add" className="btn btn-lg btn-danger">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </div>
    </div>
  );
}
