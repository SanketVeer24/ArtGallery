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
        const response = await axios.get(
          "https://661ea68d16358961cd927f00.mockapi.io/images"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const collections = data.map(
    ({
      artwork_image,
      artwork_width,
      artwork_height,
      artwork_desc,
      artwork_name,
    }) => ({
      src: artwork_image,
      width: artwork_width,
      height: artwork_height,
      caption: artwork_desc,
      alt: artwork_name,
    })
  );

  const slides = data.map(
    ({
      artwork_id,
      artwork_width,
      artwork_height,
      artwork_image,
      artwork_desc,
      artwork_name,
      year_of_creation,
      artwork_type,
    }) => ({
      id: artwork_id,
      width: artwork_width,
      height: artwork_height,
      title: artwork_name,
      description:
        artwork_desc +
        " \nCreated: " +
        year_of_creation +
        " | Medium: " +
        artwork_type,
      src: artwork_image,
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
