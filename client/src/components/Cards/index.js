import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SideBar } from "../SideBar";

export const ProductCard = ({image, name}) => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);

  return (
    <Container fluid> 
      <Row>  
        {data?.products.map((products, i) => {
            return <Col>
                <Card style={{ width: '18rem', height: '28rem'}}>
                <Card.Img src={products.image}/>
                <Card.Body>
                    <Card.Title key={i}>{products.name}</Card.Title>
                </Card.Body>
                <br></br>
                <Button variant="primary">Check me out 👀</Button>
                    </Card>
                    <br></br>
                    </Col>})}
        </Row>
    </Container>
  );
};

export default ProductCard;