import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
// import productss from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loading from '../components/Loading'
const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  const productList = useSelector((state) => state.productList)
  const { error, products, loading } = productList
  console.log(products)
  // console.log(productss)
  return (
    <>
      <Row>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default HomeScreen
