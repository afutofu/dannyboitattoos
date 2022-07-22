import React from "react";

const BookButton = ({ children, alt }) => {
  const renderButton = (alt) => {
    if (!alt) {
      return <button className="book-button">{children}</button>;
    }

    return <button className="book-button-alt">{children}</button>;
  };

  return renderButton(alt);
};

export default BookButton;
