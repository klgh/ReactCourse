import React from "react";
import { render } from "react-dom";

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>pages: {pages} pages</p>
    </section>
  );
};

const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
      <Book title="White Teeth" author="Zandie Smith" pages={580} />
      <Book title="Cat's Cradel" author="Kurt Vonn" pages={3607} />
    </div>
  );
};

render(
    <Library />, 
    document.getElementById("root")
);
