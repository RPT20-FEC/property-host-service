import React, { useState } from 'react';
import styles from '../styles/commonStyles.module.css';


const Description = (props) => {
  const [full, changeView] = useState(false);

    return (
      <div>
        {(props.less && !full) ? (
          <div className="description">{props.less}...
            <a className={styles.readMore} onClick={() => changeView(true)}>read more
            </a>
          </div>
        ) : (
        <div className="description">{props.more}</div>
        )}
      </div>
  )
}

export default Description;