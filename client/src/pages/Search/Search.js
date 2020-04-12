import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody";
import Card from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn"
import ViewBtn from "../../components/ViewBtn/ViewBtn";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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
    setSearchTerm( value.replace(/\s/g, '') );
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
          <div className="hero">
            <Jumbotron>
              <h1>React Google Books Search</h1>
              <h5>Search For and Save Books of Interest</h5>
            </Jumbotron>
            <form className="d-flex">
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder='ex. "Harry Potter"'
              />
              <FormBtn
                onClick={handleSearchSubmit}
              >
                <i className="fas fa-search"></i>
              </FormBtn>
            </form>
          </div>
          <Col size="md-12">
            <Card>
              <h4 className="text-center">Search Results</h4>
              {books.length >0? (
              <List>
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                      <SaveBtn
                          handleSaveSubmit={handleSaveSubmit}
                          bookData={book}
                        >
                          Save <i className="fas fa-bookmark"></i>
                        </SaveBtn>
                        <ViewBtn
                          link={book.link}
                        />
                        <CardBody
                          key={book.id}
                          title={book.title}
                          authors={book.authors}
                          image={book.image}
                          description={book.description}
                        />
                      </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p className="display-message text-center mt-5">No Results to Display</p>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
