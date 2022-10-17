import { Container, createStyles, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "justify",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function AboutSection() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
            ABOUT US
          </Text>
        </Title>

        <Container p={0} >
          <Text size="lg" color="dimmed" className={classes.description}>
            Looking for furnished apartments for rent? Roomstates has you
            covered! Whether you are looking for an apartment for rent in Berlin
            or a flat to rent in London, choose from Roomstates widest selection
            of properties to find your next home.
            <br />
            Easily search the city you are searching accommodation in and hit
            search! Apartments with rental prices, amenities and different
            districts will be presented to you. From Europe to America,
            Australia to Asia we offer different types of furnished
            accommodations such as rooms, apartments, flats, houses, student
            residencies and studios. Moving to a different city is always very
            challenging and the first and main step for the move is to find the
            perfect apartment. Because we know the hassle, we want to make this
            process easier for anyone who is searching for accommodation in a
            new city and want to offer a platform where expats and business
            professionals can compare apartments by rental price, by location,
            by furniture type and so on. If you are a student and looking for
            furnished rooms for rent that’s all good too! In more than 200
            cities we have student apartments and cheap furnished rental room
            options for you to make a decision. Search and compare now with
            Roomstates!
          </Text>
        </Container>
      </div>
    </Container>
  );
}
