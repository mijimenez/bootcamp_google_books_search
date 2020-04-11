import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody";
import Card from "../../components/Card";
import DeleteBtn from "../../components/DeleteBtn"

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books from database
  useEffect(() => {
    API.getBooks()
    .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  // Deletes a book from the database with a given id, then reloads books from the db
  function handleDeleteSubmit(id) {
    API.deleteBook(id)
    // Filter to return true - if the current book id doesn't include the id that we're deleting, we're going to keep it)
    setBooks(books.filter((book) => {
        return book._id != id;
    }))
  }

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card>
              <h2>Results</h2>
              {books.length >0? (
              <List>
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                        <CardBody
                          key={book.id}
                          title={book.title}
                          authors={book.authors}
                          image={book.image}
                          description={book.description}
                          link={book.link}
                        />
                        <DeleteBtn
                          handleDeleteSubmit={handleDeleteSubmit}
                          id={book._id}
                        />
                      </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
