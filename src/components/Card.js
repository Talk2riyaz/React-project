import React from 'react'

const Card = (props) => {
    return (
     <React.Fragment>
          
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">{ props.title }</h3>
                        <div className="mb-1 text-muted">{ props.date }</div>
                        <p className="card-text mb-auto">{ props.text }</p>
                        <a to="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={ props.imgsrc }  className="bd-placeholder-img" width="200" height="250" alt="img"/>
                    </div>
                </div>
            
     </React.Fragment>
    )
}

export default Card;
