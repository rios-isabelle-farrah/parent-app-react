import { Link } from "react-router-dom";
import "./MeetingListItem.css";

const MeetingListItem = ({ meeting }) => {
  const { id, file_id, category, details, date } = meeting;

  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  return (
    <tr>
      <td>{newDate.toLocaleDateString()}</td>
      <td>{category}</td>
      <td className="td-details">{details}</td>
     
      <td>
        <Link to={`/file/${file_id}/meetings/${id}`}>
          <button className="edit-button">More</button>
        </Link>
      </td>
    </tr>
  );
};

export default MeetingListItem;
// import { Link } from "react-router-dom";
// import "../Style/Meetings/MeetingListItem.css";

// const MeetingListItem = ({ Meeting }) => {
//   const { id, car_id, Meeting_type, amount_spent, date } = Meeting;

//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate(date) + 1);

//   return (
//     <tr className="row-penses">
//       <td>{newDate.toLocaleDateString()}</td>
//       <td>{Meeting_type}</td>
//       <td>${amount_spent.toLocaleString()}</td>
//       <td>
//         <Link to={`/cars/${car_id}/Meetings/${id}`}>
//           <button className="edit-button">More</button>
//         </Link>
//       </td>
//     </tr>
//   );
// };

// export default MeetingListItem;
// import { Link } from "react-router-dom";
// import "../Style/Meetings/MeetingListItem.css";

// const MeetingListItem = ({ Meeting }) => {
//   const { id, car_id, Meeting_type, amount_spent, date } = Meeting;

//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate(date) + 1);

//   return (
//     <tr className="row-penses">
//       <td>{newDate.toLocaleDateString()}</td>
//       <td>{Meeting_type}</td>
//       <td>${amount_spent.toLocaleString()}</td>
//       <td>
//         <Link to={`/cars/${car_id}/Meetings/${id}`}>
//           <button className="edit-button">More</button>
//         </Link>
//       </td>
//     </tr>
//   );
// };

// export default MeetingListItem;
