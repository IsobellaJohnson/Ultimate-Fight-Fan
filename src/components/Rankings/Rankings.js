import React, { useEffect, useState } from 'react';
import DivisionRankings from './DivisionRankings'
import './Rankings.css'

export default function Rankings() {
  const [divisions, setDivisions] = useState([])
  const [rank, setRank] = useState([])
  const [loading, setLoading] = useState(true);
  const typeToDivision = {
    8: `Men's Pound-For-Pound`,
    9: `Men's Flyweight`,
    10: `Men's Batamweight`,
    11: `Men's Featherweight`,
    12: `Men's Lightweight`,
    13: `Men's Welterweight`,
    14: `Men's Middleweight`,
    15: `Men's Light Heavyweight`,
    16: `Men's Heavyweight`,
    17: `Women's Strawweight`,
    18: `Women's Flyweight`,
    19: `Women's Bantamweight `,

  };

  
  useEffect(() => {
    const proxyUrl = "http://localhost:3001/proxy"; // Update with your proxy server URL
    // Make a GET request to the proxy server
    fetch(proxyUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        const rankingsByTypeId = {};
  
        for (const ranking of responseData.rankings) {
          const { type_id, competitor_rankings } = ranking;
  
          if (type_id >= 8 && type_id <= 19) {
            if (!rankingsByTypeId[type_id]) {
              rankingsByTypeId[type_id] = {
                division: typeToDivision[type_id] || 'Unknown',
                rankings: [],
              };
            }
  
            // Push the competitor_rankings to the corresponding type_id array
            rankingsByTypeId[type_id].rankings.push(...competitor_rankings);
          }
        }
  
        // Extract divisions and rankings from the object and convert them to arrays
        const divisionsArray = Object.values(rankingsByTypeId).map(
          (entry) => entry.division
        );
        const rankingsArray = Object.values(rankingsByTypeId).map(
          (entry) => entry.rankings
        );
  
        setRank(rankingsArray);
        setDivisions(divisionsArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);
  
  
    console.log(divisions)
    console.log(rank)

    return (
      <div className="rankings">
      <div className="rankings-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          divisions.map((division, index) => (
            <DivisionRankings key={index} division={division} competitors={rank[index]} />
          ))
        )}
      </div>
      </div>
    );
  }    