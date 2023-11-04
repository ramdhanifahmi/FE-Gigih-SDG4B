import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image, Nav, Navbar, Button, Breadcrumb, ListGroup, Card, Badge} from 'react-bootstrap';
import {Navmenu} from "../Components/Navbar/Navbar.jsx";
import {FooterSection} from "../Components/LandingPage/FooterSection.jsx";
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import {useParams} from "react-router-dom";
import axios from "axios";

const ScholarshipDetail = () => {
    const [collapsePersyaratan, setCollapsePersyaratan] = useState(true);
    const [collapseManfaat, setCollapseManfaat] = useState(true);
    const [collapsePendaftaran, setCollapsePendaftaran] = useState(true);
    const [collapseKontak, setCollapseKontak] = useState(true);

    const toggleCollapse = (section) => {
        switch (section) {
            case 'persyaratan':
                setCollapsePersyaratan(!collapsePersyaratan);
                break;
            case 'manfaat':
                setCollapseManfaat(!collapseManfaat);
                break;
            case 'pendaftaran':
                setCollapsePendaftaran(!collapsePendaftaran);
                break;
            case 'kontak':
                setCollapseKontak(!collapseKontak);
                break;
            default:
                break;
        }
    };

    const { slug } = useParams();
    console.log("Slug:", slug);
    const [scholarshipData, setScholarshipData] = useState(null);

    useEffect(() => {
        // Use Axios to fetch scholarship details from your API based on the provided slug
        axios.get(`http://localhost:3000/api/scholar/${slug}`)
            .then(response => {
                // Assuming your data is in the response.data field
                console.log(JSON.stringify(response.data))
                setScholarshipData(response.data);
            })
            .catch(error => console.error('Error fetching scholarship details:', error));
    }, [slug]);

    if (scholarshipData === null) {
        return <div>Loading...</div>; // Or some loading indicator
    }

    const registrationDate = new Date(scholarshipData.registrationDate);
    const deadlineDate = new Date(scholarshipData.deadlineDate);
    const formatDate = (date) => {
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    return (
        <>
            <Navmenu/>
            <div className="App">
                <Container fluid className="App-main">
                    <Container>
                        <Breadcrumb className="my-4">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Scholars</Breadcrumb.Item>
                            <Breadcrumb.Item active>{scholarshipData.title}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <h1>{scholarshipData.title}</h1>
                                <div className="mb-3">
                                    <Badge bg="info" className="App-label me-2">{scholarshipData.fundingType}</Badge>
                                    {Array.isArray(scholarshipData.educationalLevel) &&
                                        scholarshipData.educationalLevel.map((level, index) => (
                                            <Badge key={index} bg="primary" className="App-label me-2">
                                                {level}
                                            </Badge>
                                        ))}
                                    {Array.isArray(scholarshipData.country) &&
                                        scholarshipData.country.map((country, index) => (
                                            <Badge key={index} bg="success" className="App-label me-2">
                                                {country}
                                            </Badge>
                                        ))}
                                </div>
                                <Card className="mb-3">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <Badge bg={registrationDate > deadlineDate ? 'danger' : 'success'} className="mb-2 mb-md-0">
                                                {registrationDate > deadlineDate ? 'Closed' : 'Open'}
                                            </Badge>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row justify-content-between">
                                            <div className="text-center text-md-start mb-3 mb-md-0">
                                                <span className="App-deadline">Registration Date</span>
                                                <br />
                                                <span className="App-deadline">{formatDate(registrationDate)}</span>
                                            </div>
                                            <div className="text-center text-md-start">
                                                <span className="App-deadline">Deadline Date</span>
                                                <br />
                                                <span className="App-deadline">{formatDate(deadlineDate)}</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card className="mb-3">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} sm={4} md={2}>
                                                <Card.Text className="App-text">
                                                    Description:
                                                </Card.Text>
                                            </Col>
                                            <Col xs={12} sm={8} md={10}>
                                                <Card.Text className="App-text">
                                                    {scholarshipData.description}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <hr className="my-3" />
                                        <Row>
                                            <Col xs={12} sm={4} md={2}>
                                                <Card.Subtitle className="App-subtitle">
                                                    University:
                                                </Card.Subtitle>
                                            </Col>
                                            <Col xs={12} sm={8} md={10}>
                                                <Card.Subtitle className="App-subtitle">
                                                    {Array.isArray(scholarshipData.university) && scholarshipData.university.length > 1 ? (
                                                        <ul>
                                                            {scholarshipData.university.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    ) : scholarshipData.university}
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                        <hr className="my-3" />
                                        <Row>
                                            <Col xs={12} sm={4} md={2}>
                                                <Card.Subtitle className="App-subtitle">
                                                    Programs:
                                                </Card.Subtitle>
                                            </Col>
                                            <Col xs={12} sm={8} md={10}>
                                                <Card.Subtitle className="App-subtitle">
                                                    {Array.isArray(scholarshipData.programs) && scholarshipData.programs.length > 1 ? (
                                                        <ul>
                                                            {scholarshipData.programs.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    ) : scholarshipData.programs}
                                                </Card.Subtitle>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('persyaratan')}
                                        aria-expanded={collapsePersyaratan}
                                    >
                                        <h2>Requirement</h2>
                                        {collapsePersyaratan ? <ChevronDown /> : <ChevronUp />}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapsePersyaratan"
                                        className={`collapse ${collapsePersyaratan ? 'show' : ''} border-top-0`}
                                    >
                                        <ul className="list-unstyled list-bullet">
                                            {scholarshipData.requirement.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>



                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('manfaat')}
                                        aria-expanded={collapseManfaat}
                                    >
                                        <h2>Benefit</h2>
                                        {collapseManfaat ? <ChevronDown /> : <ChevronUp />}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapseManfaat"
                                        className={`collapse ${collapseManfaat ? 'show' : ''} border-top-0`}
                                    >
                                        <ul className="list-unstyled list-bullet">
                                            {scholarshipData.benefit.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>


                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('pendaftaran')}
                                        aria-expanded={collapsePendaftaran}
                                    >
                                        <h2>Application Process</h2>
                                        {collapsePendaftaran ? <ChevronDown /> : <ChevronUp />}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapsePendaftaran"
                                        className={`collapse ${collapsePendaftaran ? 'show' : ''} border-top-0`}
                                    >
                                        <ol className="App-application list-number" style={{ listStyleType: "decimal" }}>
                                            {scholarshipData.applicationProcess.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ol>
                                    </Card.Body>
                                </Card>


                                <Card bg="light" className="mb-3">
                                    <Card.Header
                                        className="d-flex align-items-center justify-content-between bg-transparent border-bottom-0"
                                        onClick={() => toggleCollapse('kontak')}
                                        aria-expanded={collapseKontak}
                                    >
                                        <h2>Source Information</h2>
                                        {collapseKontak ? <ChevronDown /> : <ChevronUp />}
                                    </Card.Header>
                                    <Card.Body
                                        id="collapseKontak"
                                        className={`collapse ${collapseKontak ? 'show' : ''} border-top-0`}
                                    >
                                        <p>For more information about this scholarship, please visit the official scholarship website:</p>
                                        <a href={scholarshipData.sourceInformation} target="_blank" rel="noopener noreferrer">
                                            {scholarshipData.sourceInformation}
                                        </a>
                                    </Card.Body>
                                </Card>


                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>
            <FooterSection/>

        </>
    );
};

export default ScholarshipDetail;
