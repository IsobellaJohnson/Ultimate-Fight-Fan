import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// Function to format full name
const formatFullName = (fullName) => {
  const parts = fullName.split(',');
  if (parts.length === 2) {
    const [lastname, firstname] = parts.map((part) => part.trim());
    return `${firstname} ${lastname}`;
  }
  return fullName; // If the name is not in the expected format, return it as is
};

export default function DivisionRankings({ division, competitors }) {
  const [namesWithRankZero, setNamesWithRankZero] = useState([]);
  const url_start =
    'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_profile_listing_medium_1x/s3/';
  const defaultImageUrl = 'uff-logo.png'; // Provide a path to your default image

  const url_ends = [
    {
      name: 'Jon Jones',
      url: '2023-03/JONES_JON_BELT_03_04.png?itok=Ky3r_nYI',
    },
    {
      name: 'Alexandre Pantoja',
      url: 'image/2023-07/PANTOJA_ALEXANDRE_BELTMOCK.png',
    },
    {
      name: `Sean O'Malley`,
      url: '2023-08/OMALLEY_SEAN_BELTMOCK.png?itok=n_bZ5kd4',
    },
    {
      name: 'Alex Volkanovski',
      url: '2023-07/VOLKANOVSKI_ALEXANDER_BELT_07-08.png',
    },
    {
      name: 'Islam Makhachev',
      url: '2023-02/MAKHACHEV_ISLAM_BELT_02-11.png',
    },
    {
      name: 'Leon Edwards',
      url: '2023-03/EDWARDS_LEON_BELT_03-18.png',
    },
    {
      name: 'Israel Adesanya',
      url: '2023-04/ADESANYA_ISRAEL_BELT_07-02.png',
    },
    {
      name: `Jamahal Hill`,
      url: '2023-01/HILL_JAMAHAL_BELT.png',
    },
    {
      name: 'Jon Jones',
      url: '2023-03/JONES_JON_BELT_03_04.png?itok=Ky3r_nYI',
    },
    {
      name: 'Weili Zhang',
      url: '2023-03/GRASSO_ALEXA_BELTMOCK.png',
    },
    {
      name: 'Alexa Grasso',
      url: '2023-08/WEILI_ZHANG_BELT_08-19.png',
    },
    {
      name: 'Julianna Pena',
      url: '2023-03/GRASSO_ALEXA_BELTMOCK.png',
    }
  ];

// Create a map object from url_ends for efficient lookups
const urlMap = url_ends.reduce((map, entry) => {
    map[entry.name] = entry.url;
    return map;
  }, {});

  useEffect(() => {
    const names = [];
    competitors.forEach((competitor) => {
      const fullName = competitor.competitor.name;
      const formattedName = formatFullName(fullName);
      if (competitor.rank === 0 || formattedName === 'Jon Jones') {
        competitor.rank = 'C';
        const matchingUrl = urlMap[formattedName];
        setNamesWithRankZero(matchingUrl);
      }
    });
  }, [competitors, urlMap]);

  console.log(namesWithRankZero);

  const competitorList = competitors.map((competitor, index) => {
    const fullName = competitor.competitor.name;
    const formattedName = formatFullName(fullName);

    return (
      <Typography
        key={index}
        variant="body2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          fontSize: '14px',
        }}
      >
        <b>{competitor.rank} </b>
        <Button className="competitor-btn" size="small">
          {formattedName}
        </Button>
      </Typography>
    );
  });

  const url = `${url_start}${namesWithRankZero}`

  return (
    <div>
      <Card variant="outlined" className="ranking-card">
      <CardContent>
          <Typography className="division" component="div">
            {division}
          </Typography>
        </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={url}
        title="champ"
      />
        {competitorList}
      </Card>
    </div>
  );
}