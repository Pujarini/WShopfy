import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setproducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => {
          return (
            <Col sm={12} md={4} lg={4} xl={3}>
              <Products product={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
