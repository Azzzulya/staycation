import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'


test("should not allowed click button if isDisbaled is present", () => {
  const { container }  = render(<Button isDisabled></Button>)

  expect(container.querySelector("span.disabled")).toBeInTheDocument()
});


test("should render loading/spinner", () => {
  const { container, getByText }  = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument();
});


// eslint-disable-next-line jest/no-identical-title
test("should render <a> tag", () => {
  const { container }  = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container }  = render(
    <Router>
      <Button href="a" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
