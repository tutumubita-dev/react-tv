import "./shows.css";

export default function ShowListItem({ show, setSelectedShow }) {
  return (
    <li className="show">
      <button onClick={() => setSelectedShow(show)}>{show.name}</button>
    </li>
  );
}
