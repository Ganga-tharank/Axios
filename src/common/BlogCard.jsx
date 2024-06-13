import React from 'react'
import Card from "react-bootstrap/Card";

function BlogCard({ name, username, email, website,phone }) {
  return (
    <div className="mx-auto blogcard">
      <Card style={{ width: "30rem", padding: "10px" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>Username : {username}</p>
            <p>E-mail : {email}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogCard