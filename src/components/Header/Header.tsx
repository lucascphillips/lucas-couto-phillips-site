'use client'

import { styled } from "styled-components"
import Link from "next/link"

const Container = styled.div`
    background-color: red;
`

export default function Header() {
    return (
        <Container>
            <h1>HEADER</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/resume"}>Resume</Link>
            <Link href={"/contact"}>Contact</Link>
        </Container>
    )
}