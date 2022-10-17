import { createStyles, Text, Title } from "@mantine/core";
import Cards from "./Card";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom:theme.spacing.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function AvailableServices() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Title>Do not waste your time!!</Title>
      <Text size="md" color="dimmed" style={{ lineHeight: 1.6 }}>
        Find your desired available room and book now
      </Text>
      <Cards />
    </div>
  );
}
