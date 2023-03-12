import { Container, Title } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SchoolTutor from "../entities/SchoolTutor";
import styled from "styled-components"


interface NewStudentProps {
    schoolTutor: SchoolTutor;
    setSchoolTutor: Dispatch<SetStateAction<null>>;
}
const HomeLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-style: italic;
`

export default function NewStudent({ schoolTutor, setSchoolTutor }: NewStudentProps) {
    return (
        <>
            <Navbar user={schoolTutor} setUser={setSchoolTutor}/>
            <Container>
                <div className="inner">
                    <div className="content">
                        <HomeLink to="/home"> Back to homepage</HomeLink>
                    <Title className="title">
                        New student form
                    </Title>
                    </div>
                </div>
            </Container>
        </>
    );
}