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
                
            </Stack>
        </Col>
    </Row>
    </>
}

