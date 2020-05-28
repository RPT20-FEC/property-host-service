import React, { useState } from 'react';
import styles from '../styles/commonStyles.module.css';


const Description = (props) => {
  const [full, changeView] = useState(false);

    return (
      <div className={styles.desc}>
        {(props.less && !full) ? (
          <div className={styles.descText}>{props.less}...&nbsp;
            <a className={styles.readMore} onClick={() => changeView(true)}>read more
            </a>

          </div>
        ) : (
        <div className={styles.descText}>{props.more}

        </div>
        )}
        { (props.less && full) ? (
          <div className={styles.descText}>{props.more}&nbsp;
          <a className={styles.readMore} onClick={() => changeView(false)}>read less
            </a>
          </div>
        ) : null
        }
      </div>
  )
}

export default Description;