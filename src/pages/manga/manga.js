import React, {Component, useEffect, useState} from 'react';
import './manga.css'
import {Button, Card, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import onepiece from '../../ressources/onepiece.jpg';
import snk from '../../ressources/snk.jpg';
import vl from '../../ressources/vl.jpg';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons'


// const api = axios.create({
//     baseURL: 'http://localhost/'
// })

const Manga = () => {
    const [mangas, setMangas] = useState([]);

    //get
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost/mangas')
            const jsonResult = await result.json()
            console.log(jsonResult)
            setMangas(jsonResult)

        }

        fetchData();
    }, [])


    //DELETE
    // const deleteManga = async (res) => {
    //     const response = await axios.delete('http://localhost:8080/mangas/${id}');
    //     return res.json(response);
    // };

    //render() {
    return (
        <div>
            <div>
                <h2>Manga test api</h2>
                <div className="p-4 row">
                    {mangas.map(manga =>
                        <Card key={manga.idManga} style={{width: '18rem'}} className="m-4">
                            <Card.Img variant="top" src={onepiece}/>
                            <Card.Body>
                                <Card.Title>{manga.title}</Card.Title>
                                <Card.Text>
                                    L'auteur est {manga.author} et l'éditeur est {manga.editor}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>

    );
}
//}

export default Manga;
