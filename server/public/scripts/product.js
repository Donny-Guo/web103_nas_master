const renderProductDetails = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())
  const response = await fetch('/products')
  const data = await response.json()

  const productContent = document.getElementById('product-content')

  if (data) {
    const product = data.find(product => product.id === requestedID)
    if (product) {
      document.getElementById('image').src = product.image
      document.getElementById('name').textContent = product.title
      document.getElementById('description').textContent = product.description
      document.getElementById('price').textContent = "Price: " + product.price
      document.getElementById('bays').textContent = "Bays: " + product.bays
      document.getElementById('processor').textContent = "Processor: " + product.processor
      document.getElementById('networking').textContent = "Networking: " + product.networking

    }
  }
}

renderProductDetails()