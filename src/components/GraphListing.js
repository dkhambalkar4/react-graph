import React from 'react';
import { Button, Card, Dropdown } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'

const sampleData = [
  {
    id: 1,
    title: 'Crude Palm Oil',
    subtitle: 'Crude Palm Oil | USD/MT | Indonesia',
    footertext: 'Crude Palm Oil(Indonesia,Spot FD, USD/MT)',
    data: [
      { date: 'Jul 18', price: 500 },
      { date: 'Jul 19', price: 750 },
      { date: 'Jul 20', price: 1250 },
      { date: 'Jul 21', price: 1000 },
    ],
  },
  {
    id: 2,
    title: 'Caustic Soda',
    subtitle: 'Caustic Soda | USD/MT | Argentina',
    footertext: 'Caustic Soda(Argentina,CIF, Solid, USD/MT)',
    data: [
      { date: '2017', price: 600 },
      { date: '2018', price: 1000 },
      { date: '2019', price: 800 },
      { date: '2020', price: 1400 },
      { date: '2021', price: 1200 },
      { date: '2022', price: 1600 },
    ],
  },
];

const GraphListing = () => {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/GraphDetail/${id}`);
  };

  const handleDeleteClick = (id) => {
    console.log(`Delete graph with ID: ${id}`);
    // Implement deletion logic here
  };

  const handleDownload = (type, id) => {
    console.log(`Download ${type} for graph ID: ${id}`);
    // Implement download logic here
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {sampleData.map((graph) => (
          <div key={graph.id} className="col-md-6 mb-4">
            <Card className="shadow">
              <Card.Body>
              <div className='top-button'>
                    <Button variant="danger" className="ml-2 trashbutton" onClick={() => handleDeleteClick(graph.id)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                    <Button variant="primary" onClick={() => handleViewClick(graph.id)}>
                      View
                    </Button>
                  </div>
                  <hr />
                <div className="d-flex justify-content-between align-items-center">
                 
                  <Card.Title>{graph.title}</Card.Title>

                 
                 
               
                  <Dropdown>
                  <Dropdown.Toggle variant="link" className="p-0 m-0 border-0">
                  <span>
                  <i class="bi bi-plus-circle"></i>&nbsp;
                  <i class="bi bi-dash-circle"></i>&nbsp;
                  </span>
                  <i class="bi bi-three-dots"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleDownload('SVG', graph.id)}>Download SVG</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDownload('PNG', graph.id)}>Download PNG</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDownload('CSV', graph.id)}>Download CSV</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <Card.Subtitle className="mb-2 text-muted">{graph.subtitle}</Card.Subtitle>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={graph.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#000000" />
                  </LineChart>
                </ResponsiveContainer>
               <br />
               <p>{graph.footertext}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphListing;
