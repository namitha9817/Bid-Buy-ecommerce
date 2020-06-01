import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { API } from "../config";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getAProducts, deleteAProduct } from "./apiAdmin";


const AManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getAProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };



    const destroy = productId => {
        deleteAProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description=""
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Total {products.length} products
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center centt">

                                <strong>{p.name}</strong>
                                <Link to={`/admin/aproduct/update/${p._id}`}>
                                    <span className=" btn">
                                        <button className="btn btn-outline-primary mt-2 mb-2">
                                        update
                                     </button>
                                    </span>
                                </Link>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badgee badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default AManageProducts;
