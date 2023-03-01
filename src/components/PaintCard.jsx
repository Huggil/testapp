import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const PaintCard = () => {
  const [paintData, setPaintData] = useState([])

    //lien api chicago
  const Api = "https://api.artic.edu/api/v1/artworks?limit=100";

  useEffect(() => {

    axios.get(Api).then((res) => setPaintData(res.data.data));
  }, [])

  console.log(paintData)



  return (
    <div className="paints">
      <ul>
        {paintData.map((test, index) => (
          <Card key={index} test={test} />
        ))}
      </ul>
    </div>
  );
};

export default PaintCard;
