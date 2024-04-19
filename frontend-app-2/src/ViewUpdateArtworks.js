// import React, { useState, useEffect } from 'react';

// function ViewUpdateArtworks() {
//   const [artworks, setArtworks] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const fetchArtworks = async () => {
//       const response = await fetch('/api/artworks');
//       const data = await response.json();
//       setArtworks(data);
//     };

//     fetchArtworks().catch(console.error);
//   }, []);

//   // Include functionality for viewing and updating artworks

//   return (
//     <div>
//       {/* Map through artworks to display them */}
//       {artworks.map((artwork) => (
//         <div key={artwork.id}>
//           {/* Display artwork details */}
//           <p>{artwork.title}</p>
//           {/* ...other details */}
//           {/* Update button or form */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewUpdateArtworks;

// import React, { useState } from 'react';

// function ViewUpdateArtworks() {

//   const dummyData = [
//     {
//       artwork_id: 'ART001',
//       artwork_name: 'Starry Night',
//       artist: 'Vincent van Gogh',
//       art_type: 'Oil Painting',
//       creation_year: 1889,
//       purchase_status: 'Available',
//       art_desc: 'A masterpiece depicting a serene night sky with swirling stars.'
//     },
//     {
//       artwork_id: 'ART002',
//       artwork_name: 'The Persistence of Memory',
//       artist: 'Salvador Dalí',
//       art_type: 'Surrealism',
//       creation_year: 1931,
//       purchase_status: 'Sold',
//       art_desc: 'A surreal depiction of melting clocks in a dream-like landscape.'
//     }
//   ];

//   const [artworks, setArtworks] = useState(dummyData);
//   const [editArtwork, setEditArtwork] = useState(null);
//   const [newArtwork, setNewArtwork] = useState({
//     artwork_id: '',
//     artwork_name: '',
//     artist: '',
//     art_type: '',
//     creation_year: '',
//     purchase_status: '',
//     art_desc: ''
//   });

//   const handleInputChange = (e, isEdit = true) => {
//     const { name, value } = e.target;
//     if (isEdit) {
//       setEditArtwork((prev) => ({
//         ...prev,
//         [name]: value
//       }));
//     } else {
//       setNewArtwork((prev) => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleUpdateArtwork = () => {
//     const updatedArtworks = artworks.map((artwork) =>
//       artwork.artwork_id === editArtwork.artwork_id ? editArtwork : artwork
//     );
//     setArtworks(updatedArtworks);
//     setEditArtwork(null);
//   };

//   const handleAddArtwork = () => {
//     setArtworks([...artworks, newArtwork]);
//     setNewArtwork({
//       artwork_id: '',
//       artwork_name: '',
//       artist: '',
//       art_type: '',
//       creation_year: '',
//       purchase_status: '',
//       art_desc: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Artwork List</h2>
//       {artworks.map((artwork) => (
//         <div key={artwork.artwork_id}>
//           <p>ID: {artwork.artwork_id}</p>
//           <p>Name: {artwork.artwork_name}</p>
//           <p>Artist: {artwork.artist}</p>
//           <p>Type: {artwork.art_type}</p>
//           <p>Year: {artwork.creation_year}</p>
//           <p>Status: {artwork.purchase_status}</p>
//           <p>Description: {artwork.art_desc}</p>
//           <button onClick={() => setEditArtwork(artwork)}>Edit</button>
//         </div>
//       ))}
//       {editArtwork && (
//         <div>
//           <h2>Edit Artwork</h2>
//           <form>
//             <input type="hidden" value={editArtwork.artwork_id} />
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="artwork_name"
//                 value={editArtwork.artwork_name}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Artist:
//               <input
//                 type="text"
//                 name="artist"
//                 value={editArtwork.artist}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Type:
//               <input
//                 type="text"
//                 name="art_type"
//                 value={editArtwork.art_type}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Year:
//               <input
//                 type="number"
//                 name="creation_year"
//                 value={editArtwork.creation_year}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Status:
//               <select
//                 name="purchase_status"
//                 value={editArtwork.purchase_status}
//                 onChange={(e) => handleInputChange(e, true)}
//               >
//                 <option value="Available">Available</option>
//                 <option value="Sold">Sold</option>
//               </select>
//             </label>
//             <label>
//               Description:
//               <textarea
//                 name="art_desc"
//                 value={editArtwork.art_desc}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <button type="button" onClick={handleUpdateArtwork}>
//               Update Artwork
//             </button>
//           </form>
//         </div>
//       )}
//       <div>
//         <h2>Add New Artwork</h2>
//         <form>
//           <label>
//             ID:
//             <input
//               type="text"
//               name="artwork_id"
//               value={newArtwork.artwork_id}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="artwork_name"
//               value={newArtwork.artwork_name}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Artist:
//             <input
//               type="text"
//               name="artist"
//               value={newArtwork.artist}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Type:
//             <input
//               type="text"
//               name="art_type"
//               value={newArtwork.art_type}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Year:
//             <input
//               type="number"
//               name="creation_year"
//               value={newArtwork.creation_year}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Status:
//             <select
//               name="purchase_status"
//               value={newArtwork.purchase_status}
//               onChange={(e) => handleInputChange(e, false)}
//             >
//               <option value="Available">Available</option>
//               <option value="Sold">Sold</option>
//             </select>
//           </label>
//           <label>
//             Description:
//             <textarea
//               name="art_desc"
//               value={newArtwork.art_desc}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <button type="button" onClick={handleAddArtwork}>
//             Add Artwork
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ViewUpdateArtworks;


import React, { useState, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 

function ViewUpdateArtworks() {
    const dummyData = [
        {
            artwork_id: 'ART001',
            artwork_name: 'Starry Night',
            artist: 'Vincent van Gogh',
            art_type: 'Oil Painting',
            creation_year: 1889,
            purchase_status: 'Available',
            art_desc: 'A masterpiece depicting a serene night sky with swirling stars.'
        },
        {
            artwork_id: 'ART002',
            artwork_name: 'The Persistence of Memory',
            artist: 'Salvador Dalí',
            art_type: 'Surrealism',
            creation_year: 1931,
            purchase_status: 'Sold',
            art_desc: 'A surreal depiction of melting clocks in a dream-like landscape.'
        }
    ];

    const [artworks, setArtworks] = useState(dummyData);
    const [editArtwork, setEditArtwork] = useState(null);
    const [newArtwork, setNewArtwork] = useState({
        artwork_id: '',
        artwork_name: '',
        artist: '',
        art_type: '',
        creation_year: '',
        purchase_status: '',
        art_desc: ''
    });

    const handleInputChange = (e, isEdit = true) => {
        const { name, value } = e.target;
        if (isEdit) {
            setEditArtwork((prev) => ({
                ...prev,
                [name]: value
            }));
        } else {
            setNewArtwork((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleUpdateArtwork = () => {
        const updatedArtworks = artworks.map((artwork) =>
            artwork.artwork_id === editArtwork.artwork_id ? editArtwork : artwork
        );
        setArtworks(updatedArtworks);
        setEditArtwork(null);
    };

    const handleAddArtwork = () => {
        setArtworks([...artworks, newArtwork]);
        setNewArtwork({
            artwork_id: '',
            artwork_name: '',
            artist: '',
            art_type: '',
            creation_year: '',
            purchase_status: '',
            art_desc: ''
        });
    };

    // Prepare data for the pie chart
    const chartData = useMemo(() => {
        const statusCounts = artworks.reduce((acc, { purchase_status }) => {
            acc[purchase_status] = (acc[purchase_status] || 0) + 1;
            return acc;
        }, {});

        return {
            labels: Object.keys(statusCounts),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#42a5f5', '#66bb6a'],
                borderColor: ['#1e88e5', '#43a047'],
                borderWidth: 1,
            }],
        };
    }, [artworks]);

    const chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div>
            <h2>Artwork List</h2>
            <div style={{ width: '40%', height: '300px', marginBottom: '20px' }}>
                <Pie data={chartData} options={chartOptions} />
            </div>
            {artworks.map((artwork) => (
                <div key={artwork.artwork_id}>
                    <p>ID: {artwork.artwork_id}</p>
                    <p>Name: {artwork.artwork_name}</p>
                    <p>Artist: {artwork.artist}</p>
                    <p>Type: {artwork.art_type}</p>
                    <p>Year: {artwork.creation_year}</p>
                    <p>Status: {artwork.purchase_status}</p>
                    <p>Description: {artwork.art_desc}</p>
                    <button onClick={() => setEditArtwork(artwork)}>Edit</button>
                </div>
            ))}
            {editArtwork && (
                <div>
                    <h2>Edit Artwork</h2>
                    <form>
                        <input type="hidden" value={editArtwork.artwork_id} />
                        <label>
                            Name:
                            <input
                                type="text"
                                name="artwork_name"
                                value={editArtwork.artwork_name}
                                onChange={(e) => handleInputChange(e, true)}
                            />
                        </label>
                        <label>
                            Artist:
                            <input
                                type="text"
                                name="artist"
                                value={editArtwork.artist}
                                onChange={(e) => handleInputChange(e, true)}
                            />
                        </label>
                        <label>
                            Type:
                            <input
                                type="text"
                                name="art_type"
                                value={editArtwork.art_type}
                                onChange={(e) => handleInputChange(e, true)}
                            />
                        </label>
                        <label>
                            Year:
                            <input
                                type="number"
                                name="creation_year"
                                value={editArtwork.creation_year}
                                onChange={(e) => handleInputChange(e, true)}
                            />
                        </label>
                        <label>
                            Status:
                            <select
                                name="purchase_status"
                                value={editArtwork.purchase_status}
                                onChange={(e) => handleInputChange(e, true)}
                            >
                                <option value="Available">Available</option>
                                <option value="Sold">Sold</option>
                            </select>
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="art_desc"
                                value={editArtwork.art_desc}
                                onChange={(e) => handleInputChange(e, true)}
                            />
                        </label>
                        <button type="button" onClick={handleUpdateArtwork}>
                            Update Artwork
                        </button>
                    </form>
                </div>
            )}
            <div>
                <h2>Add New Artwork</h2>
                <form>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="artwork_id"
                            value={newArtwork.artwork_id}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="artwork_name"
                            value={newArtwork.artwork_name}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <label>
                        Artist:
                        <input
                            type="text"
                            name="artist"
                            value={newArtwork.artist}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <label>
                        Type:
                        <input
                            type="text"
                            name="art_type"
                            value={newArtwork.art_type}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <label>
                        Year:
                        <input
                            type="number"
                            name="creation_year"
                            value={newArtwork.creation_year}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            name="purchase_status"
                            value={newArtwork.purchase_status}
                            onChange={(e) => handleInputChange(e, false)}
                        >
                            <option value="Available">Available</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="art_desc"
                            value={newArtwork.art_desc}
                            onChange={(e) => handleInputChange(e, false)}
                        />
                    </label>
                    <button type="button" onClick={handleAddArtwork}>
                        Add Artwork
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ViewUpdateArtworks;
