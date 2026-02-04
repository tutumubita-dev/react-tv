import "./shows.css";
import ShowListItem from "./ShowListItem";
/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ setSelectedShow, shows }) {
  return (
    <nav>
      <ul className="shows">
        {shows.map((show) => (
          <ShowListItem
            key={show.name}
            setSelectedShow={setSelectedShow}
            show={show}
          />
        ))}
      </ul>
    </nav>
  );
}
