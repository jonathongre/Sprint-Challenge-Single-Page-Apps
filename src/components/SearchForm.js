import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }
  
  const search = (event) => {
     onSearch(query.name);
    event.preventDefault();

  }

  return (
    <section className="search-form">
      <Form inline onSubmit={(event) => search(event)}>
        <Input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <Button color="success" type="submit">Search</Button>
      </Form>
    </section>
  );
}
