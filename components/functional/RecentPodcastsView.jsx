import React from 'react'

const RecentPodcasts = React.memo(props => {
  if (!props.podcasts_array.length) {
    return  <div className="radio__recent radio__recent_hidden"></div>
  }

  return (
    <div className="radio__recent">
        <h2 className="radio__title alerta large-font">Recent Played:</h2>
        <div className={`radio__wrap ${navigator.onLine ? 'radio__wrap_latest' : ''}`}>
            {props.podcasts_array}
        </div>
    </div>
  )
});

export default RecentPodcasts;