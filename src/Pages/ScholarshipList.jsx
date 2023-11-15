import {Container, Row, Col, Pagination, Form} from 'react-bootstrap';
import ScholarCard from "../Components/Scholarship/ScholarshipCard.jsx";
import {Navmenu} from "../Components/Navbar/Navbar.jsx";
import React, {useEffect, useState} from "react";
import {FooterSection} from "../Components/LandingPage/FooterSection.jsx";
import axios from "axios";
import {useLocation} from "react-router-dom";

const ScholarshipList = () => {
    const [scholars, setScholars] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    const location = useLocation();

    const countryParam = new URLSearchParams(location.search).get('country');

    const [country, setCountry] = useState(countryParam || '');

    const fetchScholars = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/api/scholar`, {
                params: {
                    page,
                    title: search,
                    sort,
                    country,
                },
            });
            const data = response.data;
            setScholars(data.data);
            setTotalPages(data.pagination.totalPages);
        } catch (error) {
            console.error('Error fetching scholars:', error);
        }
    };

    useEffect(() => {
        // Update the country state when the URL parameter changes
        setCountry(countryParam || '');
    }, [countryParam]);

    useEffect(() => {
        fetchScholars();
    }, [page, search, sort]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <>
            <Navmenu />
            <Container className="main-content mt-3">
                <Form className="d-flex justify-content-between mb-3">
                    <Form.Group controlId="search" className="flex-grow-1 me-2">
                        <Form.Control type="text" placeholder="Search by title" value={search} onChange={handleSearchChange} />
                    </Form.Group>
                    <Form.Group controlId="sort" className="w-auto">
                        <Form.Select value={sort} onChange={handleSortChange}>
                            <option value="">Sort By</option>
                            <option value="registrationDateClosest">Open terdekat</option>
                            <option value="deadlineDateClosest">Deadline terdekat</option>
                            <option value="deadlineDateFurthest">Deadline terjauh</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <Row>
                    {scholars.map((scholar, index) => (
                        <Col key={index}>
                            <ScholarCard scholar={scholar} />
                        </Col>
                    ))}
                </Row>
                <Pagination className="pagination">
                    <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
                    <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index}
                            active={index + 1 === page}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === totalPages} />
                    <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages} />
                </Pagination>
            </Container>
            <FooterSection />
        </>
    );
};

export default ScholarshipList;
