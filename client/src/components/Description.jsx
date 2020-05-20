import React, { useState } from 'react';
import { ReadMore } from './styledComponents.jsx'


const Description = (props) => {
  const [full, changeView] = useState(false);

    return (
      <div>
        {(props.less && !full) ? (
          <div className="description">{props.less}...
            <ReadMore className='read-more' onClick={() => changeView(true)}>read more
            </ReadMore>
          </div>
        ) : (
        <div className="description">{props.more}</div>
        )}
      </div>
  )
}

export default Description;