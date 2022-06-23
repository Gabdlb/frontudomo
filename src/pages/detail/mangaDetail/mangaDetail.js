import React from 'react';
import onepiece from "../../../ressources/onepiece.jpg";
import {useEffect, useState} from "@types/react";

const MangaDetail = () => {
    const [mangas, setMangas] = useState([]);

    //get
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/mangas/${id}')
            const jsonResult = await result.json()

            setMangas(jsonResult)
        }

        fetchData();
    }, [])
    return (
        <div className="App">
            {mangas.map(manga =>
                <section key={manga.id} className="section-content padding-y">
                    <div className="container">

                        <div className="row">
                            <main className="col-md-9">
                                <div className="card">

                                    <table className="table table-borderless">
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
                                                        <a href="#" className="title text-dark">{manga.title}</a>
                                                        <p className="small text-muted">Size: size, Color: color, Brand:
                                                            brand</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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

                                                <button className="btn btn-primary">Ajout au panier</button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </div>

                    </div>
                </section>
            )}
            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">

                                <table className="table table-borderless">
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
                                    </tr>
                                    </tbody>
                                </table>
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

                                    <button className="btn btn-primary">Ajout au panier</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default MangaDetail;
