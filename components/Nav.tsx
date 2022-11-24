import styled from "@emotion/styled"
import Link from "next/link";

const Li = styled.li`
  float: right;
  display: inline-block;
  padding: 1em;
  font-style: normal;
  font-weight: 400;
  list-style-type: none;
  color: var(--color-faded);
  font-size: 1.8rem;
  position: relative;
  &::after {
    content: "";
    height: 0;
    left: 0.8em;
    position: absolute;
    width: 0;
  }
  &:hover::after {
    width: 3em;
    bottom: 0.3em;
    border: 2px solid var(--accent-color);
    border-radius: 4px;
    transition: width 0.2s;
  }
  &:hover {
    color: var(--color);
  }
  & a {
    text-decoration: none;
  }
`;

const Nav = () => (
  <nav>
    <ul>
      <Li>
        <Link href="/#kontakt" scroll={false}>Kontakt</Link>
      </Li>
      <Li>
        <Link href="/program">Program</Link>
      </Li>
      <Li>
        <Link href="/#vstupenky" scroll={false}>Vstupenky</Link>
      </Li>
    </ul>
  </nav>
);

export default Nav;
