import React from 'react';
import onepiece from '../../ressources/onepiece.jpg';
import Home from '../home/home';
import './cart.css'

const Cart = () => {
    return (
        <div className="App">

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Shopping cart</h2>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">

                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" className="text-right" width="200"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <figure className="itemside">
                                                <div className="aside">
                                                    <img src={onepiece} className="img-sm"/></div>
                                                <figcaption className="info">
                                                    <a href="#" className="title text-dark">Product name</a>
                                                    <p className="small text-muted">Size: size, Color: color, Brand:
                                                        brand</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">$08.00</var>
                                                <small className="text-muted"> $00.00 each</small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href=""
                                               className="btn btn-light mr-2" data-toggle="tooltip"> <i
                                                className="fa fa-heart"></i></a>
                                            <a href="" className="btn btn-light btn-round"> Remove</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="card-body border-top">
                                    <a href="#" className="btn btn-primary float-md-right"> Make Purchase <i
                                        className="fa fa-chevron-right"></i> </a>
                                    <a href="/" className="btn btn-light"> <i
                                        className="fa fa-chevron-left"></i> Continue shopping </a>
                                </div>
                            </div>

                            <div className="alert alert-success mt-3">
                                <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery
                                </p>
                            </div>

                        </main>
                        <aside className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Have coupon?</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name=""
                                                       placeholder="Coupon code"/>
                                                <span className="input-group-append">
                                    <button className="btn btn-primary">Apply</button>
                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">USD 00</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right">USD 00</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Total:</dt>
                                        <dd className="text-right  h5"><strong>$00</strong></dd>
                                    </dl>
                                    <hr/>
                                    <p className="text-center mb-3">
                                        <img src="src/ressources/logo.svg" height="26"/>
                                    </p>

                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Cart;
