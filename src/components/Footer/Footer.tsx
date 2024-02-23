'use client'

import { styled } from "styled-components"

const Container = styled.div`
    background-color: blue;
    position: absolute;
    bottom: 0;
    width: 100vw;
`

export default function Header() {
    return (
        <Container>
            <h1>Footer</h1>
        </Container>
    )
}