import { useEffect, useState } from "react";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    ProductName: "",
    Price: ""
  });
  const [proItems, setProItems] = useState([]);

  const setvalue = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const validatePrice = (price) => {
    return !isNaN(price) && parseFloat(price) > 0;
  };

  const Adddata = (e) => {
    e.preventDefault();
    
    if (!validatePrice(productData.Price)) {
      alert('Please enter a valid price');
      return;
    }

    const normalizedName = productData.ProductName.trim().toLowerCase();
    const isDuplicate = proItems.some(product => 
      product.ProductName.trim().toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert('Product with this name already exists!');
      return;
    }

    const newProduct = {
      id: new Date().getTime(),
      ProductName: productData.ProductName.trim(),
      Price: parseFloat(productData.Price)
    };
    
    const updatedproItems = [...proItems, newProduct];
    setProItems(updatedproItems);
    localStorage.setItem('proItems', JSON.stringify(updatedproItems));
    
    setProductData({
      ProductName: "",
      Price: ""
    });
  };

  useEffect(() => {
    const storedproItems = localStorage.getItem('proItems');
    if (storedproItems) {
      setProItems(JSON.parse(storedproItems));
    }
  }, []);

  return (
    <div className="Addproduct">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={Adddata} className="Add_product_form">
        <div>
          <label className="product-nam">
            Product Name
          </label>
          <input
            required
            className="product-name"
            type="text"
            placeholder="Enter product name"
            name="ProductName"
            value={productData.ProductName}
            onChange={setvalue}
          />
        </div>
        <div>
          <label className="propric">
            Price
          </label>
          <input
            required
            className="proprice"
            type="number"
            step="0.01"
            min="0"
            placeholder="Enter price"
            name="Price"
            value={productData.Price}
            onChange={setvalue}
          />
        </div>
        <button
          type="submit"
          className="add_product_Button"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;