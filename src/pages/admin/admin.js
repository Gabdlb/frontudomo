import React, {useState} from 'react';
import './admin.css';
import {Button, Card, Container, Form, Nav, Navbar} from "react-bootstrap";

function Admin() {
    const [mangas, setMangas] = useState([]);
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [editor, setEditor] = useState([]);

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
    }
    return (
        <div>
            <h1>Ajout d'un manga</h1>
            <form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control placeholder="Titre du manga" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Auteur</Form.Label>
                        <Form.Control placeholder="Auteur du manga" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Editeur</Form.Label>
                        <Form.Control placeholder="Editeur du manga" value={editor} onChange={(e) => setEditor(e.target.value)}/>
                    </Form.Group>

                    <Button onClick={submitManga} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </form>
        </div>
    );
}

export default Admin;
