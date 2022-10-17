import styled from "@emotion/styled";
import { Container, Grid, Hidden, Toolbar } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Li = styled.li`
  float: right;
  padding: 0.6em 0.8em;
  font-style: normal;
  font-weight: 400;
  list-style-type: none;
  color: var(--color-faded);
  font-size: 1.8rem;
  position: relative;
  &:after {
    content: "";
    height: 0;
    left: 0.8em;
    position: absolute;
    width: 0;
  }
  &:hover:after {
    width: 3em;
    bottom: 0.3em;
    border: 2px solid var(--color-accent);
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
const Nav = styled.nav`
  display: block;
  margin: 0 1rem;
`;

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
`

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
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brněnský Festival Kávy</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  id="vstupenky">
        <Nav>
          <ul>
            <Li>
              <a href="#kontakt">Kontakt</a>
            </Li>
            <Li>
              <a href="#program">Program</a>
            </Li>
            <Li>
              <a href="#vstupenky">Vstupenky</a>
            </Li>
          </ul>
        </Nav>
        <Section>
          <Container maxWidth="lg">
            <Grid container direction='column' sx={{minHeight: '70vh'}} justifyContent='space-between'>
              <Grid item>
                <H1>
                  Brněnský
                  <br />
                  Festival
                  <br />
                  Kávy
                </H1>
              </Grid>
              <Grid item>
                <H3>
                  28-29. 03. 2023
                  <br />
                  Káznice | Brno
                </H3>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section>
          <Grid container>
            <Hidden mdDown>
              <Grid item>
                <H2>01</H2>
              </Grid>
            </Hidden>
            <Grid item sx={{ flexGrow: 1 }}>
              <Container maxWidth="lg">
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                    autem! Culpa laborum iure quam id dolores doloribus dolorum
                    inventore magni. Dolorem magni laborum eligendi a velit, optio
                    natus et provident? Modi sunt quisquam corrupti non commodi
                    tenetur placeat blanditiis explicabo, doloribus nemo suscipit quis
                    dolor, aspernatur eveniet ipsum architecto? Qui?
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem placeat ducimus, quas corporis est debitis officia
                    aperiam molestiae, aspernatur repellendus sunt cupiditate suscipit
                    quo qui voluptatibus nobis enim. Maxime aspernatur accusamus illo
                    earum consequuntur corporis architecto aliquid, sequi esse vel
                    voluptatem tenetur aut nesciunt fugiat nisi hic laboriosam est
                    aliquam sit natus at maiores rem nulla! Reprehenderit officiis
                    tempore eveniet ullam laudantium similique labore tempora cumque
                    sed minus aliquam esse eos maiores voluptatum vel, eaque odit
                    porro! Obcaecati, illum dignissimos!
                  </p>
                  <p style={{ textAlign: "center", height: '120px' }}>
                  </p>
                  <Grid container alignItems='center' justifyContent='center'>
                    <Grid item>
                      <Button href="/vstupenky">Koupit vstupenku</Button>
                    </Grid>
                    <Grid item>
                      <Button href="/program">Prohlédnout program -></Button>
                    </Grid>
                  </Grid>
              </Container>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Grid container>
            <Hidden mdDown>
              <Grid item>
                <H2>02</H2>
              </Grid>
            </Hidden>
            <Grid item sx={{ flexGrow: 1 }}>
              <Container maxWidth="lg">
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                    autem! Culpa laborum iure quam id dolores doloribus dolorum
                    inventore magni. Dolorem magni laborum eligendi a velit, optio
                    natus et provident? Modi sunt quisquam corrupti non commodi
                    tenetur placeat blanditiis explicabo, doloribus nemo suscipit quis
                    dolor, aspernatur eveniet ipsum architecto? Qui?
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem placeat ducimus, quas corporis est debitis officia
                    aperiam molestiae, aspernatur repellendus sunt cupiditate suscipit
                    quo qui voluptatibus nobis enim. Maxime aspernatur accusamus illo
                    earum consequuntur corporis architecto aliquid, sequi esse vel
                    voluptatem tenetur aut nesciunt fugiat nisi hic laboriosam est
                    aliquam sit natus at maiores rem nulla! Reprehenderit officiis
                    tempore eveniet ullam laudantium similique labore tempora cumque
                    sed minus aliquam esse eos maiores voluptatum vel, eaque odit
                    porro! Obcaecati, illum dignissimos!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                    harum magni impedit maiores molestiae laborum, cum eligendi dolore
                    dolorum in corrupti, dolorem optio reiciendis iste, ut delectus
                    obcaecati facere vel!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                    autem! Culpa laborum iure quam id dolores doloribus dolorum
                    inventore magni. Dolorem magni laborum eligendi a velit, optio
                    natus et provident? Modi sunt quisquam corrupti non commodi
                    tenetur placeat blanditiis explicabo, doloribus nemo suscipit quis
                    dolor, aspernatur eveniet ipsum architecto? Qui?
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem placeat ducimus, quas corporis est debitis officia
                    aperiam molestiae, aspernatur repellendus sunt cupiditate suscipit
                    quo qui voluptatibus nobis enim. Maxime aspernatur accusamus illo
                    earum consequuntur corporis architecto aliquid, sequi esse vel
                    voluptatem tenetur aut nesciunt fugiat nisi hic laboriosam est
                    aliquam sit natus at maiores rem nulla! Reprehenderit officiis
                    tempore eveniet ullam laudantium similique labore tempora cumque
                    sed minus aliquam esse eos maiores voluptatum vel, eaque odit
                    porro! Obcaecati, illum dignissimos!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                    harum magni impedit maiores molestiae laborum, cum eligendi dolore
                    dolorum in corrupti, dolorem optio reiciendis iste, ut delectus
                    obcaecati facere vel!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                    autem! Culpa laborum iure quam id dolores doloribus dolorum
                    inventore magni. Dolorem magni laborum eligendi a velit, optio
                    natus et provident? Modi sunt quisquam corrupti non commodi
                    tenetur placeat blanditiis explicabo, doloribus nemo suscipit quis
                    dolor, aspernatur eveniet ipsum architecto? Qui?
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem placeat ducimus, quas corporis est debitis officia
                    aperiam molestiae, aspernatur repellendus sunt cupiditate suscipit
                    quo qui voluptatibus nobis enim. Maxime aspernatur accusamus illo
                    earum consequuntur corporis architecto aliquid, sequi esse vel
                    voluptatem tenetur aut nesciunt fugiat nisi hic laboriosam est
                    aliquam sit natus at maiores rem nulla! Reprehenderit officiis
                    tempore eveniet ullam laudantium similique labore tempora cumque
                    sed minus aliquam esse eos maiores voluptatum vel, eaque odit
                    porro! Obcaecati, illum dignissimos!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                    harum magni impedit maiores molestiae laborum, cum eligendi dolore
                    dolorum in corrupti, dolorem optio reiciendis iste, ut delectus
                    obcaecati facere vel!
                  </p>
              </Container>
            </Grid>
          </Grid>
        </Section>

        <Section id="kontakt">
          <Grid container>
            <Hidden mdDown>
              <Grid item>
                <H2>03</H2>
              </Grid>
            </Hidden>
            <Grid item sx={{ flexGrow: 1 }}>
              <Container maxWidth="lg">
                <p style={{ textAlign: "center" }}>
                  Nejlépe a najrychleji se vše dozvíte ze sociálních sítí. Proto nás sledujte na Facebooku a Instagramu.
                </p>
                <div style={{ height: '80px'}} />
                  <Grid container alignItems='center' justifyContent='center'>
                    <Grid item>
                      <Button href="/">FB</Button>
                    </Grid>
                    <Grid item>
                      <Button href="/">IG</Button>
                    </Grid>
                    <Grid item>
                      <Button href="/">MX</Button>
                    </Grid>
                    <Grid item>
                      <Button href="/">IM</Button>
                    </Grid>
                  </Grid>
                <div style={{ height: '80px'}} />
              </Container>
            </Grid>
          </Grid>
        </Section>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
