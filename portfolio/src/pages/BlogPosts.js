import Footer from "../components/Footer";
import Navbarfun from "../components/Navbarfun";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import ReactMarkdown from "react-markdown";

export default function BlogPosts() {
  return (
    <>
      <Navbarfun />
      <ReactMarkdown></ReactMarkdown>
      <Footer />
    </>
  );
}
