import React from 'react'

const style = {
    imageStyle: {
        display: 'block',
        width: '100%',
        height: '150px'
    },
    thumbnail: {
        maxWidth: '170px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid red',
    }
};

const productCard = (props) => {
    // const product = props.oneProduct;
    return (
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <div className="thumbnail" style={style.thumbnail}>
                <img src={props.image} style={style.imageStyle} alt="..."/>
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.model}</p>
                    <p>{props.price} Eur</p>
                    <p>
                        <button className="btn btn-danger" role="button" onClick={props.click}>Details</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default productCard;

