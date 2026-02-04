import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  /**<ShowDetails> keeps the selected episode in a state variable. */
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p className="show-details">Select a show to see episodes</p>;
  }
  const episodes = show.episodes;

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <h1>{show.genre}</h1>

      <EpisodeList
        episodes={episodes}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />

      {selectedEpisode ? (
        <section className="episode-details">
          <h3>
            Episode {selectedEpisode.number}: {selectedEpisode.title}
          </h3>
          <p>{selectedEpisode.description}</p>
        </section>
      ) : (
        <p>Select an episode to see details.</p>
      )}
    </div>
  );
}
