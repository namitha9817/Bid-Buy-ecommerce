import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { encrypt }from "../crypto";

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();



const clickSubmit = event => {
        console.log();
    const encryptedcat = encrypt(name);
    console.log(encryptedcat);
    };

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">

                <li className="list-group-item">

                    <div class="dropdown">
                    <div class="adj">

                             Men
                             </div>
                              <div class="dropdown-content">
                                
                        <Link className="nav-link" to="/create/category">
                            Add Category
                        </Link>
                         
                        <Link className="nav-link" to="/create/Product">
                            Add Product
                        </Link>
                     
                        
                        <Link className="nav-link" to="/admin/products">
                            Inventory
                        </Link>

                              </div>
                            </div>
                            </li>

                    <li className="list-group-item">

                    <div class="dropdown">
                    <div class="adj">
                             Woman
                             </div>
                              <div class="dropdown-content">
                                <Link className="nav-link" to="/create/womencat">
                            Add Category 
                        </Link>

                              <Link className="nav-link" to="/create/Womanprod">
                            Add Product
                        </Link>
                         <Link className="nav-link" to="/admin/wproducts">
                            Inventory
                        </Link>
                            
                              </div>
                            </div>
                            </li>
                    
                        <li className="list-group-item adj">
                        <Link className="blu" to="/admin/orders">
                            View Orders
                        </Link>
                    </li>


                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`Hi ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">{adminInfo()}</div>
                {clickSubmit()}
            </div>
        </Layout>
    );
};

export default AdminDashboard;
