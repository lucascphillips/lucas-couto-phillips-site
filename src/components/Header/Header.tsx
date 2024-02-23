'use client'

import { styled } from "styled-components"
import Link from "next/link"

const Container = styled.div`
    background-color: red;
    width: 100vw;
    display: flex;
    align-items: center;
    gap: 1em;
`

const LinkContainer = styled.div`
    display: flex;
    gap: calc(5em);
`

export default function Header() {
    return (
        <Container>
            <h1>Header</h1>
            <LinkContainer>
                <Link href={"/"}>Home</Link>
                <Link href={"/resume"}>Resume</Link>
                <Link href={"/contact"}>Contact</Link>
            </LinkContainer>
        </Container>
    )
}