import { Link } from "react-router-dom";
//import "./MeetingListItem.css";

const MeetingsListItem = ({ meeting }) => {
  const { id, file_id, category, details, date } = meeting;

  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  return (
    <tr>
      <td>{newDate.toLocaleDateString()}</td>
      <td>{category}</td>
      <td className="td-details">{details}</td>
     
      <td>
        <Link to={`/files/${file_id}/meetings/${id}`}>
          <button className="edit-button">More</button>
        </Link>
      </td>
    </tr>
  );
};

export default MeetingsListItem;