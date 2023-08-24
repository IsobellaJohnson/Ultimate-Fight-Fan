import React, { useEffect, useState } from 'react';
import DivisionRankings from './DivisionRankings'
import ApiService from '../../ApiService'
import './Rankings.css'

export default function Rankings() {
  const {divisions, rank, loading} = ApiService();
  console.log(divisions)

    return (
      <div className="rankings">
      <h5 className="rankings-header">ATHLETE RANKINGS</h5>
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