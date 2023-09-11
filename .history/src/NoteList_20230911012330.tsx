import React from "react"
import { useMemo, useState } from "react"
import {Badge, Button, Card, Col, Form, Modal, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import ReactSelect from "react-select"
import { Tag } from "./App"
import styles from "./NoteList.module.css"

export function NoteList() {
    return <>
    <Row>
        <Col><h1>Notes Taking App</h1></Col>
        <Col xs = "auto">
            <Stack gap={4} direction="horizontal">
                <Link to = "/new">
                    <Button variant="primary">Create</Button>
                </Link>
                <Button variant="outline-secondary">Edit Tags</Button>
            </Stack>
        </Col>
    </Row>
    <Form>
        <Row className="mb-4">
            <Col>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Col>
        </Row>
    </Form>
    </>
}
