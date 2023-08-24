import { useState, useEffect } from 'react';

const ApiService = () => {
    const [divisions, setDivisions] = useState([])
    const [rank, setRank] = useState([])
    const [name, setName] = useState([])
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
      19: `Women's Bantamweight `
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
          console.log(responseData)
    
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
    
 /*     const competitorList = rank.map((competitor, index) => {
        const fullName = competitor.competitor.name;
        const parts = fullName.split(','); 
        )} */

/*         if (parts.length === 2) {

          const lastname = parts[0].trim(); // Remove leading/trailing spaces
          const firstname = parts[1].trim(); // Remove leading/trailing spaces
      
          const formattedName = `${firstname} ${lastname}`;
        } */
    

return{
    divisions,
    rank,
    loading

}} 
export default ApiService;