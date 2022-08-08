import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import App from "./App";
import Home from "./components/pages/Home";
import UserForm from "./components/UserForm";
import QuoteForm2 from "./components/pages/QuoteForm2";


test("renders the landing page", () => {
  render(<App />);

  screen.getByRole('heading', { name: /We provide your free quote!/i });
  screen.getByRole('link', { name: /Assignment Two/i });
  screen.getByRole('link', { name: /Home/i });
  screen.getByRole('link', { name: /Quote Form/i });
  screen.getByRole('link', { name: /Quote History/i });
  screen.getByRole('link', { name: /Client Registration/i });

  screen.getByRole('list');
  screen.findAllByText('listitem');
  screen.findAllByText('button');
  screen.getByRole('navigation');

  
});

test("async", async function() {});

test("function", function() {});



