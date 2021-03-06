import { Link } from "react-router-dom";
import "../Style/Expenses/ExpenseListItem.css";

const MeetingSectionList = ({ meeting }) => {
  const { id, file_id, category, details, date } = meeting;

  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  return (
    <tr className="row-penses">
      <td>{newDate.toLocaleDateString()}</td>
      <td>{category}</td>
      <td>{details.toLocaleString()}</td>
      <td>
        <Link to={`/files/${file_id}/meetings/${id}`}>
          <button className="edit-button">More</button>
        </Link>
      </td>
    </tr>
  );
};

export default MeetingSectionList;
