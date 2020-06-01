import React, { useState, useEffect, Component } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import ShowImage from "./ShowImage";
import Viewitem from "./Viewitem";
import MyCarousel from "./MyCarousel";
import ReactCardCarousel from 'react-card-carousel';
import { Link, withRouter } from "react-router-dom";
import moment from "moment";


const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <Layout
            title={product && product.name}
            description=""
            className="cente"
        >
          <div className="row">
                <div className="cente col-9">

            
                    {product && product.description && (
                        <Viewitem product={product} showViewProductButton={false} />
                    )}

                </div>
                
                <div className="col-7 padd">
                    <h2>Other products you might like</h2>


                    <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
                    
                    {relatedProduct.map((p, i) => (
                        <div className="pad">
                         <div style={ MyCarousel.CARD_STYLE }>
                          
                        <div key={i} className="col-8 mb-12">
                            <Card key={i} product={p} />
                           
                            </div>
                           </div>
                           </div>

                     ))}
                    </ReactCardCarousel>
                </div>
                </div>
              
         
            </Layout>


    );
};

export default Product;
