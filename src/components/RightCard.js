import React from 'react'

const RightCard = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">{props.title} <span className="text-muted">{props.titilesecond}</span></h2>
                <p className="lead">{props.text}</p>
            </div>
            <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={props.imgsrc} alt="img" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500" />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </div>
        </React.Fragment>
    )
}

export default RightCard
