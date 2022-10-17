import { createStyles, Image, Text, Title } from "@mantine/core";

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

}));

export function Privacy() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image
        src={"/privacyy.svg"}
        className={classes.image}
        alt="Room images"
      />
      <div className={classes.body}>
        <Title className={classes.title}>Privacy Policy</Title>

        <Text size="sm" color="dimmed">
          roomstates.us does not share personal information or save your credit
          card information. Email addresses are also unavailable owners or
          tenants. All owners are screened. Owners who pass to The highest
          verification is set with the TRUSTED logo. All rental cables sent
          through the “Mail Center” are monitored for legitimacy and quality.
          Only highly trusted tenants are allowed to bypass the mail center.
        </Text>
      </div>
    </div>
  );
}
