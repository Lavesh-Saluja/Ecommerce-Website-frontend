import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Product({value}) {
  return (
    <Card className="my-3 p-3 rounded ">
      <Link to={`/product/${value._id}`}>
        <Card.Img src={value.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${value._id}`}>
          <Card.Title as="div">
            <strong>{value.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {value.rating} from {value.numReviews} reviews
          </div>
          
        <Card.Text as="h3">
          ${value.price}
        </Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default Product
