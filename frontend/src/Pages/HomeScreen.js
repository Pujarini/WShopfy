import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col sm={12} md={4} lg={4} xl={3}>
                <Products product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
