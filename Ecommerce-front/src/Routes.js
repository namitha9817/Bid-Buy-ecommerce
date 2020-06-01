import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import CSignin from "./user/CSignin";
import Home from "./core/Home";
import Women from "./core/Women";
import Men from "./core/Men";
import Auction from "./core/Auction";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Womencat from "./admin/Womencat";
import Auctioncat from "./admin/Auctioncat";
import Auctionprod from "./admin/Auctionprod";
import Womanprod from "./admin/Womanprod";
import Product from "./core/Product";
import WProduct from "./core/WProduct";
import AProduct from "./core/AProduct";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import WManageProducts from "./admin/WManageProducts";
import AManageProducts from "./admin/AManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import WUpdateProduct from "./admin/WUpdateProduct";
import AUpdateProduct from "./admin/AUpdateProduct";




const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Men" exact component={Men} />
                <Route path="/Women" exact component={Women} />
                <Route path="/Auction" exact component={Auction} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/csignin" exact component={CSignin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/Womencat"
                    exact
                    component={Womencat}
                />
                <AdminRoute
                    path="/create/Auctioncat"
                    exact
                    component={Auctioncat}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoute
                    path="/create/Womanprod"
                    exact
                    component={Womanprod}
                />
                <AdminRoute
                    path="/create/Auctionprod"
                    exact
                    component={Auctionprod}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/wproduct/:productId" exact component={WProduct} />
                <Route path="/aproduct" exact component={AProduct} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <AdminRoute
                    path="/admin/wproducts"
                    exact
                    component={WManageProducts}
                />
                <AdminRoute
                    path="/admin/aproducts"
                    exact
                    component={AManageProducts}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute
                    path="/admin/product/update/:productId"
                    exact
                    component={UpdateProduct}
                />
                <AdminRoute
                    path="/admin/wproduct/update/:productId"
                    exact
                    component={WUpdateProduct}
                />
                <AdminRoute
                    path="/admin/aproduct/update/:productId"
                    exact
                    component={AUpdateProduct}
                />
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
