import styled from "@emotion/styled";
import { Container, Grid, Hidden } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";

const H1 = styled.h1`
  display: inline-block;
  text-transform: uppercase;
  right: 0;
  bottom: 0;
  font-style: normal;
  font-size: 4rem;
  padding: 0.5em 1em;
  color: var(--color);
  display: inline-block;
  border-radius: 1px;
`;
const H2 = styled.h2`
  position: relative;
  padding-left: 1rem;
  line-height: 3rem;
  margin: 0;
  font-weight: 400;
  // color: var(--accent-color);
  font-size: 3rem;
  &:after {
    content: "";
    width: 1px;
    top: -0.3rem;
    right: -1rem;
    bottom: -1.5rem;
    border: 2px solid var(--color);
    background-color: var(--color);
    border-radius: 4px;
    position: absolute;
  }
`;

const H3 = styled.h3`
  float: right;
  font-size: 2.3rem;
  line-height: 3rem;
  text-align: right;
  padding: 1.5rem 2rem 1rem 5rem;
  background-color: var(--color);
  color: var(--bg-color);
`;

const Section = styled.section`
  padding: 2em 0;
  background-color: var(--bg-color);
  color: var(--color);
  &:nth-of-type(2n) {
    --color: var(--background);
    --bg-color: var(--foreground);
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem;
  border: 2px solid var(--color);
  border-radius: 4px;
  font-size: 1.4rem;
  margin: 1rem;
`;

const Home: NextPage = () => (
  <>
    <Head>
      <title>Brněnský Festival Kávy</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Nav />
      <Section />
    </main>

    <footer></footer>
  </>
);

export default Home;
