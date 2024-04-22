import React, { useEffect, useState, useMemo } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Navbar from "./Navbar";
import Logo from "../images/logo.png";
import axios from "axios";

function ViewUpdateCollection() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // Fetch event data from API
    const fetchCollection = async () => {
      try {
        const response = await axios.get(
          "https://662056403bf790e070af94e0.mockapi.io/collections"
        );
        const fetchedData = response.data;
        setCollection(fetchedData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchCollection();
  }, []);

  const [editArtwork, setEditArtwork] = useState(null);
  const [newCollection, setNewCollection] = useState({
    artworkId: "",
    artworkName: "",
    artist: "",
    artType: "",
    creationYear: "",
    purchaseStatus: "",
    artDesc: "",
  });

  const handleInputChange = (e, isEdit = true) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditArtwork((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewCollection((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdateArtwork = () => {
    const updatedArtworks = collection.map((artwork) =>
      artwork.artworkId === editArtwork.artworkId ? editArtwork : artwork
    );
    setCollection(updatedArtworks);
    setEditArtwork(null);
  };

  const handleAddCollection = async () => {
    if (
      newCollection.artworkId.trim() === "" ||
      newCollection.artworkName.trim() === "" ||
      newCollection.purchaseStatus.trim() === "" ||
      newCollection.artDesc.trim() === ""
    ) {
      alert("Work ID, Name, Status and Description fields are required.");
      return;
    }
    setCollection([...collection, newCollection]);
    //Post API
    try {
      const response = await axios.post(
        "https://662056403bf790e070af94e0.mockapi.io/collections",
        newCollection
      );
      if (!response.ok) {
        console.log("Error adding event.");
      }
    } catch (error) {
      console.log("Error adding event.");
    }
    setNewCollection({
      artworkId: "",
      artworkName: "",
      artist: "",
      artType: "",
      creationYear: "",
      purchaseStatus: "",
      artDesc: "",
    });
  };

  // Prepare data for the pie chart
  const chartData = useMemo(() => {
    const statusCounts = collection.reduce((acc, { purchaseStatus }) => {
      acc[purchaseStatus] = (acc[purchaseStatus] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: ["#5297d4", "#fe7869"],
          borderColor: ["#5297d4", "#fe7869"],
          borderWidth: 1,
        },
      ],
    };
  }, [collection]);

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Navbar page="admin"></Navbar>
      <div id="viewUpdateContainer">
        <div className="updateSections">
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>Edit & View Collection</h2>
          </div>
          <table id="editTable">
            <thead>
              <tr>
                <th>Work ID</th>
                <th>Name</th>
                <th>Artist</th>
                <th>Type</th>
                <th>Year</th>
                <th>Status</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {collection.map((artwork) => (
                <tr key={artwork.artworkId}>
                  <td>{artwork.artworkId}</td>
                  <td>{artwork.artworkName}</td>
                  <td>{artwork.artist}</td>
                  <td>{artwork.artType}</td>
                  <td>{artwork.creationYear}</td>
                  <td>{artwork.purchaseStatus}</td>
                  <td>{artwork.artDesc}</td>
                  <td className="updateCell">
                    <button
                      className="updateBtn"
                      onClick={() => setEditArtwork(artwork)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
        {editArtwork && (
          <div className="updateSections">
            <div className="viewUpdateHeader">
              <img src={Logo} alt="Logo"></img>
              <h2>Edit Collection</h2>
            </div>
            <form id="editCollectionForm" className="editContainer">
              <input type="hidden" value={editArtwork.artworkId} />
              <div className="form-group">
                <label>Name: </label>
                <input
                  type="text"
                  name="artworkName"
                  value={editArtwork.artworkName}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Artist:</label>
                <input
                  type="text"
                  name="artist"
                  value={editArtwork.artist}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Type:</label>
                <input
                  type="text"
                  name="artType"
                  value={editArtwork.artType}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <input
                  type="number"
                  name="creationYear"
                  value={editArtwork.creationYear}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select
                  name="purchaseStatus"
                  value={editArtwork.purchaseStatus}
                  onChange={(e) => handleInputChange(e, true)}
                >
                  <option value="Unsold">Unsold</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="artDesc"
                  value={editArtwork.artDesc}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <button type="button" onClick={handleUpdateArtwork}>
                Update Artwork
              </button>
            </form>
          </div>
        )}
        <div
          className="updateSections"
          style={{ width: "40%", height: "300px", margin: "40px 0" }}
        >
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>Edit & View Collection</h2>
          </div>
          <Pie data={chartData} options={chartOptions} />
        </div>

        <div className="updateSections"></div>
        <div className="updateSections">
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>Add to Collection</h2>
          </div>
          <form id="addCollectionForm" className="editContainer">
            <div className="form-group">
              <label>Work ID:</label>
              <input
                type="text"
                name="artworkId"
                value={newCollection.artworkId}
                onChange={(e) => handleInputChange(e, false)}
                required
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="artworkName"
                value={newCollection.artworkName}
                onChange={(e) => handleInputChange(e, false)}
                required
              />
            </div>
            <div className="form-group">
              <label>Artist:</label>
              <input
                type="text"
                name="artist"
                value={newCollection.artist}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input
                type="text"
                name="artType"
                value={newCollection.artType}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Year:</label>
              <input
                type="number"
                name="creationYear"
                value={newCollection.creationYear}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                name="purchaseStatus"
                value={newCollection.purchaseStatus}
                onChange={(e) => handleInputChange(e, false)}
                required
              >
                <option value=""></option>
                <option selected value="Unsold">
                  Unsold
                </option>
                <option value="Sold">Sold</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="artDesc"
                value={newCollection.artDesc}
                onChange={(e) => handleInputChange(e, false)}
                required
              />
            </div>
            <button type="button" onClick={handleAddCollection}>
              Add to Collection
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewUpdateCollection;
