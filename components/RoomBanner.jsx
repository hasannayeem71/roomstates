import { Button, createStyles, Image, Text, Title } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingLeft: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },
}));

export function RoomBanner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image
        src={"/choose.svg"}
        className={classes.image}
        alt="Room images"
      />
      <div className={classes.body}>
        <Title className={classes.title}>
          Room | Roommate | House | Apartment | Sublet / Summer Sublet
          |Accommodation | Find flatmate | Private room{" "}
        </Title>

        <Text size="sm" color="dimmed">
          Discover the roommate! 17,219 rented rooms worldwide Discover Your
          Dream.
        </Text>

        <div className={classes.controls}>
          <Button component="a"
          target="_blank"
          href="https://bnc.lt/diNm/gXarFVq2IB?referral=0000e130&path=login">Discover</Button>
        </div>
      </div>
    </div>
  );
}
