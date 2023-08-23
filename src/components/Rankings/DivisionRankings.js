import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DivisionRankings({ division, competitors }) {

    //when you click
    const competitorList = competitors.map((competitor, index) => {
        const fullName = competitor.competitor.name;
        const parts = fullName.split(','); 

        if (parts.length === 2) {

          const lastname = parts[0].trim(); // Remove leading/trailing spaces
          const firstname = parts[1].trim(); // Remove leading/trailing spaces
      
          const formattedName = `${firstname} ${lastname}`;
      
          return (
            <Typography
              key={index}
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center', // Align items vertically
                gap: '20px', // Add space between rank and name
                fontSize: '12px',
              }}
            >
              <b>{competitor.rank}.</b> <p>{formattedName}</p>
            </Typography>
          );
        } else {
          // Handle the case where the name doesn't have the expected format
          return (
            <Typography key={index} variant="body2">
              <b>{competitor.rank}.</b> {fullName} {/* Display the name as is */}
            </Typography>
          );
        }
      });

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {division}
          </Typography>
          {competitorList}
        </CardContent>
      </Card>
    </div>
  );
}





