import {Form, Stack, Col, Row } from "react-bootstrap"

export function NoteForm() {
    return <Form>
        <Stack gap = {4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">

                    </Form.Group>
                </Col>
            </Row>
        </Stack>
    </Form>
}