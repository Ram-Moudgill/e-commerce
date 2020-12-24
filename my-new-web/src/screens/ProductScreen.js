import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  FormControl,
} from 'react-bootstrap'

import Rating from '../components/Rating'
import { singleProduct } from '../actions/productActions'
const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(singleProduct(match.params.id))
  }, [match, dispatch])
  const productDetail = useSelector((state) => state.productDetail)
  const { product, error, loading } = productDetail
  const {
    image,
    name,
    description,
    rating,
    numReviews,
    price,
    countInStock,
  } = product
  const [qty, setQty] = useState(1)
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  return (
    <>
      <Row>
        {loading ? (
          <h2>loading</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Col lg={4} md={12}>
              <Card>
                <Card.Img src={image}></Card.Img>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <h3>{name}</h3>
              <ListGroup>
                <ListGroupItem>
                  <Rating value={rating} text={numReviews}></Rating>
                </ListGroupItem>
                <ListGroupItem>{description}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg={4} md={12}>
              <ListGroup>
                <ListGroupItem>
                  <h3>{name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Price</p>
                  <p>{price}</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>Status</p>
                  <p>{countInStock > 0 ? countInStock : 'Out of stock'}</p>
                </ListGroupItem>
                <ListGroupItem>
                  {countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>
                          qty
                          <FormControl
                            as='select'
                            value={qty}
                            onChange={(e) => {
                              setQty(e.target.value)
                            }}
                          >
                            {[...Array(countInStock).keys()].map((item) => (
                              <option key={item} value={item + 1}>
                                {' '}
                                {item + 1}
                              </option>
                            ))}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                </ListGroupItem>
                <ListGroupItem>
                  <Button
                    onClick={addToCartHandler}
                    variant='primary'
                    className='btn-block'
                    disabled={countInStock === 0}
                  >
                    {' '}
                    Add to cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </>
        )}
      </Row>
    </>
  )
}

export default ProductScreen
