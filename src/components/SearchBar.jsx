import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

export default function SearchBar(props) {
  const {
    onStartSearch,
    category,
    categories,
    categoryChange,
    searchKeyword,
    searchKeywordChange,
    isSearched
  } = props;
  return (
    <Container style={{ borderBottom: "1px solid #333", paddingBottom: "8px" }}>
      <h3>Search for asset</h3>
      <Row>
        {categories && (
          <select value={category} onChange={categoryChange}>
            {categories.map((cat) => (
              <option value={cat.value}>{cat.title}</option>
            ))}
          </select>
        )}
      </Row>
      <Row>
        <input
          value={searchKeyword}
          onChange={(evt) => searchKeywordChange(evt.target.value)}
          placeholder="Keyword"
          style={{ width: "90%" }}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              onStartSearch();
            }
          }}
        />
        <Button disabled={isSearched} onClick={(evt) => onStartSearch()}>
          Search
        </Button>
      </Row>
    </Container>
  );
}
