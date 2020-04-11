import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody";
import Card from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn"

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   if (searchTerm) {
  //     loadBooks();
  //   }
  // }, [searchTerm])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBookResultsByTitle(searchTerm)
      .then(res => {
        // console.log(res);
        setBooks(res)
        }
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    setSearchTerm(value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      loadBooks();
        // .then(res => setBooks(res))
        // .catch(err => console.log(err));
    }
  };

  function handleSaveSubmit(bookData) {
    // console.log(bookData);
    API.saveBook({
      _id : bookData.id,
      title: bookData.title,
      authors: bookData.authors,
      description: bookData.description,
      image: bookData.image,
      link: bookData.link
    })
      // .then(res => setSavedObject())
      // .catch(err => console.log(err));
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
                onClick={handleSearchSubmit}
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
                          link={book.link}
                        />
                        <SaveBtn
                          // onClick={handleSaveSubmit}
                          handleSaveSubmit={handleSaveSubmit}
                          bookData={book}
                        >
                          Save
                        </SaveBtn>
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
