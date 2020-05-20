import React from "react";
import CohostListEntry from './CohostListEntry.jsx';
import { ajax } from 'jquery';
import { useState, useEffect } from 'react';
import {
  Bold
} from './styledComponents.jsx';
require('dotenv').config();




const CohostList = (props) => {

  const [cohosts, setCohost] = useState(0);

  useEffect(() => {
    ajax({
      url: process.env.host + '/hosts/' + props.id + '/co-hosts',
      type: 'GET',
      success: (data) => {
        console.log('got cohost data ', data)
        setCohost(data);
      },
      error: function(err) {
        console.log("Failed to get the data from the server ", err);
      }
    })

  }, []);

  return (
    <div>
      <Bold> Co-hosts </Bold>
        <div className='flex-container'>

          {Array.from(cohosts).map(host =>
            <CohostListEntry host={host} key={host.id} propertyId={props.propertyId}/>
          )}

        </div>
    </div>
  );
}

export default CohostList;