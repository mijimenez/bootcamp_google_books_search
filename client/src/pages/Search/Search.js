import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody";
import Card from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBookResultsByTitle()
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
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(() => setFormObject({
  //         title: "",
  //         author: "",
  //         synopsis: ""
  //       }))
  //       .then(() => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
            </Jumbotron>
            <form>
              <Input
              />
              <FormBtn
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
                  <ListItem>
                      <Card>
                        <CardBody
                          key={book.id}
                          title={book.title}
                          author={book.author}
                          image={book.image}
                          link={book.link}
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
