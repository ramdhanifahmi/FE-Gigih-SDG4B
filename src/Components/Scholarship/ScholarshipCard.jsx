import React from 'react';
import {Card, Button, Badge} from 'react-bootstrap';
import {Link} from "react-router-dom";

const ScholarCard = ({ scholar }) => {
    const registrationDate = new Date(scholar.registrationDate);
    const deadlineDate = new Date(scholar.deadlineDate);
    const today = new Date();

    const formatDate = (date) => {
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    return (
        <Link to={`/scholar/${scholar.slug}`} style={{textDecoration: 'none', color:'inherit'}}>
        <Card style={{ width: '20rem', height: '15rem', margin:'0.5rem', overflow: 'hidden', cursor:'pointer' }}>
            <Card.Body>
                {scholar.educationalLevel.map((level, index) => (
                    <Badge key={index} bg="primary" className="mb-2 me-2">{level}</Badge>
                ))}
                {scholar.country.map((country, index) => (
                    <Badge key={index} bg="secondary" className="mb-2 me-2">{country}</Badge>
                ))}                <Badge bg={deadlineDate > today ? 'success' : 'danger'} className="mb-2">
                    {deadlineDate > today ? 'Open' : 'Closed'}
                </Badge>
                <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {scholar.title}
                </Card.Title>
                <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Funding Type: {scholar.fundingType}
                    <br />
                    Registration Date: {formatDate(registrationDate)}
                    <br />
                    Deadline Date: {formatDate(deadlineDate)}
                </Card.Text>
            </Card.Body>

        </Card>
        </Link>

    )
};

export default ScholarCard;
