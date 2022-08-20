import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import products from "../products";

const HomeScreen = () => {
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
