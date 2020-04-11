import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody";
import Card from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import ViewBtn from "../../components/ViewBtn/ViewBtn";
import SaveBtn from "../../components/SaveBtn";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState("")

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   if (formObject) {
  //     loadBooks();
  //   }
  // }, [formObject])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBookResultsByTitle(formObject)
      .then(res => {
        // console.log(res);
        setBooks(res)
        }
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    setFormObject(value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject) {
      loadBooks();
        // .then(res => setBooks(res))
        // .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder='ex. "Harry Potter"'
              />
              <FormBtn
                // disabled={!(formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
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
                        />
                        <ViewBtn 
                          link={book.link}
                        />
                        <SaveBtn />
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
