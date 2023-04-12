import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./JobList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const JobList = ({ cp }) => {
    const [showAll, setShowAll] = useState(false);

    const navigate = useNavigate();

  const {
    id,
    company,
    logo,
    title,
    location,
    salary_range,
    job_type_one,
    job_type_two,
    description,
    responsibilities,
    educational_requirements,
    experiences,
    phone,
    email,
  } = cp;

  

  return (
    <div className="card-container">
      <Card className="single-card" style={{ width: "24rem" }}>
        <Card.Img variant="top" className="w-25" src={logo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <h5>{company}</h5>
            <div className="d-flex">
              <div className="border border-1 p-2 me-2 rounded text-primary border-primary">
                <h6>{job_type_one}</h6>
              </div>
              <div className="border border-1 p-2 me-2 rounded text-primary border-primary">
                <h6>{job_type_two}</h6>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="location">
                <h6><FontAwesomeIcon icon={faLocation} /> {location}</h6>
              </div>
              <div className="salary">
                <h6><FontAwesomeIcon icon={faMoneyBillAlt} /> {salary_range}</h6>
              </div>
            </div>
          </Card.Text>
          <Button onClick={()=>navigate(`/jobdetails/${id}`)} className="view-details">View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobList;
