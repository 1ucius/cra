import React from 'react';

const AllPodcasts = React.memo(props => {
  return (
    <div className="radio__all">
        <h2 className="radio__title alerta large-font">Podcasts:</h2>
        <div className="radio__wrap">
            {props.podcasts_array}
        </div>
    </div>
  )
});

export default AllPodcasts;