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
  font-size: 3rem;
  &::after {
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
  padding: 3em 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem;
  border: 3px solid var(--accent-color);
  background-color: var(--accent-color);
  color: var(--background);
  border-radius: 2px;
  font-size: 1.4rem;
  margin: 1rem;
  &:hover {
    background-color: transparent;
    color: var(--accent-color);
  }
  transition: background-color .5s;
`;

const Main = styled.main`
  background-color: var(--bg-color);
  background-image: url(data:image/png;base64,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);
`

const Home: NextPage = () => (
  <>
    <Head>
      <title>Brněnský Festival Kávy</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Nav />
      <Section>
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            sx={{ minHeight: "70vh" }}
            justifyContent="space-between"
          >
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

      <Section id="vstupenky">
        <Grid container>
          <Hidden lgDown>
            <Grid item>
              <H2>01</H2>
            </Grid>
          </Hidden>
          <Grid item sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, autem! Culpa laborum iure quam id dolores doloribus
                dolorum inventore magni. Dolorem magni laborum eligendi a velit,
                optio natus et provident? Modi sunt quisquam corrupti non
                commodi tenetur placeat blanditiis explicabo, doloribus nemo
                suscipit quis dolor, aspernatur eveniet ipsum architecto? Qui?
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem placeat ducimus, quas corporis est debitis
                officia aperiam molestiae, aspernatur repellendus sunt
                cupiditate suscipit quo qui voluptatibus nobis enim. Maxime
                aspernatur accusamus illo earum consequuntur corporis architecto
                aliquid, sequi esse vel voluptatem tenetur aut nesciunt fugiat
                nisi hic laboriosam est aliquam sit natus at maiores rem nulla!
                Reprehenderit officiis tempore eveniet ullam laudantium
                similique labore tempora cumque sed minus aliquam esse eos
                maiores voluptatum vel, eaque odit porro! Obcaecati, illum
                dignissimos!
              </p>
              <p style={{ textAlign: "center", height: "120px" }}></p>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                  <Button href="/vstupenky">Chci vstupenku</Button>
                </Grid>
                <Grid item>
                  <Button href="/program">Prohlédnout program -{`>`}</Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Grid container>
          <Hidden lgDown>
            <Grid item>
              <H2>02</H2>
            </Grid>
          </Hidden>
          <Grid item sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, autem! Culpa laborum iure quam id dolores doloribus
                dolorum inventore magni. Dolorem magni laborum eligendi a velit,
                optio natus et provident? Modi sunt quisquam corrupti non
                commodi tenetur placeat blanditiis explicabo, doloribus nemo
                suscipit quis dolor, aspernatur eveniet ipsum architecto? Qui?
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem placeat ducimus, quas corporis est debitis
                officia aperiam molestiae, aspernatur repellendus sunt
                cupiditate suscipit quo qui voluptatibus nobis enim. Maxime
                aspernatur accusamus illo earum consequuntur corporis architecto
                aliquid, sequi esse vel voluptatem tenetur aut nesciunt fugiat
                nisi hic laboriosam est aliquam sit natus at maiores rem nulla!
                Reprehenderit officiis tempore eveniet ullam laudantium
                similique labore tempora cumque sed minus aliquam esse eos
                maiores voluptatum vel, eaque odit porro! Obcaecati, illum
                dignissimos!
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                harum magni impedit maiores molestiae laborum, cum eligendi
                dolore dolorum in corrupti, dolorem optio reiciendis iste, ut
                delectus obcaecati facere vel!
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, autem! Culpa laborum iure quam id dolores doloribus
                dolorum inventore magni. Dolorem magni laborum eligendi a velit,
                optio natus et provident? Modi sunt quisquam corrupti non
                commodi tenetur placeat blanditiis explicabo, doloribus nemo
                suscipit quis dolor, aspernatur eveniet ipsum architecto? Qui?
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem placeat ducimus, quas corporis est debitis
                officia aperiam molestiae, aspernatur repellendus sunt
                cupiditate suscipit quo qui voluptatibus nobis enim. Maxime
                aspernatur accusamus illo earum consequuntur corporis architecto
                aliquid, sequi esse vel voluptatem tenetur aut nesciunt fugiat
                nisi hic laboriosam est aliquam sit natus at maiores rem nulla!
                Reprehenderit officiis tempore eveniet ullam laudantium
                similique labore tempora cumque sed minus aliquam esse eos
                maiores voluptatum vel, eaque odit porro! Obcaecati, illum
                dignissimos!
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                harum magni impedit maiores molestiae laborum, cum eligendi
                dolore dolorum in corrupti, dolorem optio reiciendis iste, ut
                delectus obcaecati facere vel!
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, autem! Culpa laborum iure quam id dolores doloribus
                dolorum inventore magni. Dolorem magni laborum eligendi a velit,
                optio natus et provident? Modi sunt quisquam corrupti non
                commodi tenetur placeat blanditiis explicabo, doloribus nemo
                suscipit quis dolor, aspernatur eveniet ipsum architecto? Qui?
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem placeat ducimus, quas corporis est debitis
                officia aperiam molestiae, aspernatur repellendus sunt
                cupiditate suscipit quo qui voluptatibus nobis enim. Maxime
                aspernatur accusamus illo earum consequuntur corporis architecto
                aliquid, sequi esse vel voluptatem tenetur aut nesciunt fugiat
                nisi hic laboriosam est aliquam sit natus at maiores rem nulla!
                Reprehenderit officiis tempore eveniet ullam laudantium
                similique labore tempora cumque sed minus aliquam esse eos
                maiores voluptatum vel, eaque odit porro! Obcaecati, illum
                dignissimos!
              </p>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                harum magni impedit maiores molestiae laborum, cum eligendi
                dolore dolorum in corrupti, dolorem optio reiciendis iste, ut
                delectus obcaecati facere vel!
              </p>
            </Container>
          </Grid>
        </Grid>
      </Section>

      <Section id="kontakt">
        <Grid container>
          <Hidden lgDown>
            <Grid item>
              <H2>03</H2>
            </Grid>
          </Hidden>
          <Grid item sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
              <p style={{ textAlign: "center" }}>
                Nejlépe a najrychleji se vše dozvíte ze sociálních sítí. Proto
                nás sledujte na Facebooku a Instagramu.
              </p>
              <div style={{ height: "80px" }} />
              <Grid container alignItems="center" justifyContent="center">
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
              <div style={{ height: "80px" }} />
            </Container>
          </Grid>
        </Grid>
      </Section>
    </Main>

    <footer></footer>
  </>
);

export default Home;
