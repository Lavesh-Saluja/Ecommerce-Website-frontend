import React from 'react'
import {Link} from 'react-router-dom';
import {Row, Col,Image,ListGroup,Button,Card} from 'react-bootstrap';
import products from '../products';
import {useParams} from 'react-router-dom';

function Product() {
  const {id}=useParams();
  const product=products.find((p)=> p._id === id)
  return (
    <div>
      <Link className='btn btn-light my-3' to={`/`}><i class="fa-solid fa-arrow-left"></i></Link>
     <Row>
      <Col md={6}>
        <Image src={product.image} alt ={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="my-3">{product.rating} from {product.numReviews} reviews</div>
          </ListGroup.Item>

          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          
          <ListGroup.Item>
             {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                    <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>{product.countInStock > 0? 'InStock':'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Col>
                <Button disabled={product.countInStock==0}type="button">Add to Cart</Button>
                </Col>
               
              </ListGroup.Item>
          </ListGroup>

        </Card>
      </Col>
     </Row>
     
    </div>
  )
}

export default Product;
