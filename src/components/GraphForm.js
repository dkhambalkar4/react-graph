import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../styles/GraphForm.css"

const GraphForm = () => {
  const [productInfo, setProductInfo] = useState({ product: "", description: "" });
  const [rows, setRows] = useState([{ price: "", date: "" }]);
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { price: "", date: "" }]);
  };

  const removeRow = (index) => {
    const updatedRows = rows.filter((_, idx) => idx !== index);
    setRows(updatedRows);
  };

  const handleAddChanges = () => {
    setFormData([...formData, { ...productInfo, rows }]);
    // Reset fields after submission
    setProductInfo({ product: "", description: "" });
    setRows([{ price: "", date: "" }]);
  };

  const handleViewData = () => {
    navigate("/graphs-listing");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-evenly align-items-center">
        <h3 className="mb-4">Manage Product Price Trends</h3>
        <span className="addChangeBtn">
          <Button variant="primary" onClick={handleAddChanges} className="w1">
            Add Changes
          </Button>
          &nbsp;&nbsp;
          <Button variant="secondary" onClick={handleViewData}>
            View Data
          </Button>
        </span>
      </div>

      {/* Product and Description Fields */}
      <Row className="mb-3">
        <Col md={5}>
          <Form.Control
            type="text"
            name="product"
            placeholder="Enter Product Name"
            value={productInfo.product}
            onChange={handleProductChange}
          />
        </Col>
        <Col md={5}>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter Description"
            value={productInfo.description}
            onChange={handleProductChange}
          />
        </Col>
      </Row>

      {/* Dynamically generated input rows */}
      {rows.map((row, index) => (
        <Row key={index} className="mb-3">
          <Col md={5}>
            <Form.Control
              type="number"
              name="price"
              placeholder="New Price"
              value={row.price}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Col>
          <Col md={5}>
            <Form.Control
              type="date"
              name="date"
              value={row.date}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Col>
          <Col md={2}>
            {index === 0 ? (
              <Button variant="success" onClick={addRow} className="w-100">
                +
              </Button>
            ) : (
              <Button
                variant="danger"
                onClick={() => removeRow(index)}
                className="w-100"
              >
                -
              </Button>
            )}
          </Col>
        </Row>
      ))}

      {/* Display added data */}
      <div className="mt-4">
  <h4>Added Data:</h4>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Product</th>
        <th>Description</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {formData.map((data, idx) => (
        <React.Fragment key={idx}>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* For the first row of each product, display product and description, and then leave these columns blank for subsequent rows */}
              {rowIndex === 0 ? (
                <>
                  <td rowSpan={data.rows.length}>{data.product}</td>
                  <td rowSpan={data.rows.length}>{data.description}</td>
                </>
              ) : null}
              <td>{row.price}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default GraphForm;
