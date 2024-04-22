import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function Collection() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get("http://localhost:8081/api/artwork");
        const response = await axios.get(
          "https://662056403bf790e070af94e0.mockapi.io/collections"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const collections = data.map(
    ({ artworkId, artworkName, artDesc, artImage, width, height }) => ({
      id: artworkId,
      width: width,
      height: height,
      caption: artDesc,
      alt: artworkName,
      //src: `http://localhost:8081/api/artwork/${artworkId}/image",
      src: artImage,
    })
  );

  const slides = data.map(
    ({
      artworkId,
      artworkName,
      artist,
      artType,
      creationYear,
      artDesc,
      artImage,
      width,
      height,
    }) => ({
      id: artworkId,
      title: artworkName,
      width: width,
      height: height,
      description:
        artDesc +
        " \nCreated: " +
        artist +
        ", " +
        creationYear +
        " | Medium: " +
        artType,
      //src: `http://localhost:8081/api/artwork/${artworkId}/image",
      src: artImage,
    })
  );

  const handleClick = (index, item) => {
    setIndex(index);
  };

  return (
    <div id="collectionsContainer">
      <Gallery
        images={collections}
        onClick={handleClick}
        enableImageSelection={false}
        margin={5}
        rowHeight={300}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        plugins={[Captions]}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Collection;
