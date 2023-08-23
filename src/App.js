import './App.css';
import Rankings from './components/Rankings/Rankings'

function App() {

        // Filter the results where name is "pound_for_pound"
/*         const competitorData = responseData.rankings[0].competitor_rankings;
        const updatedCompetitorList = competitorData.map((competitorRanks) => ({
          rank: competitorRanks.rank,
          name: competitorRanks.competitor.name
        }));

        // Set the competitorList state
        setCompetitorList(updatedCompetitorList); */

  return (
    <div className="App">
      <Rankings/>
    </div>
  );
}

export default App;
