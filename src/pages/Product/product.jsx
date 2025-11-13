import React, { useEffect, useState } from 'react'
import './product.css'
import Card from '../../components/Cards/card'


const Product = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching products:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Ben say's wait...</div>
  if (error) return <div>Ben say's error: {error}</div>

  return (
    <div>
      <h1>Products</h1>
      <div className="products-list">
        {products && products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Product
