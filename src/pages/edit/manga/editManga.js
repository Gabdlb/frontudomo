import React, {useState, useEffect} from 'react';
import {Button, Card, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function EditManga() {
    const navigate = useNavigate();

    const [mangas, setMangas] = useState([]);
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [editor, setEditor] = useState([]);


    //get
    useEffect(() => {
        const fetchData = async (params) => {
            const result = await fetch('http://localhost/mangas')
            const jsonResult = await result.json()
            console.log(jsonResult)
            setMangas(jsonResult)
        }
        fetchData();
    }, [])

    const submitManga = async (e) => {
        e.preventDefault()
        const manga = {title, author, editor};
        await fetch('http://localhost/mangas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(manga)
        })
        //const resultInJson = await result.json()
        navigate('/mangas');
    }
    return (
        <div>
            <h1>Modifier le manga</h1>
            <form key={mangas.idManga}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control placeholder="Titre du manga" value={mangas.title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Auteur</Form.Label>
                        <Form.Control placeholder="Auteur du manga" value={mangas.author} onChange={(e) => setAuthor(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Editeur</Form.Label>
                        <Form.Control placeholder="Editeur du manga" value={mangas.editor} onChange={(e) => setEditor(e.target.value)}/>
                    </Form.Group>

                    <Button onClick={submitManga} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </form>
        </div>
    );
}

export default EditManga;
