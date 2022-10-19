import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    // borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function ServiceSection() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              We <span className={classes.highlight}>provide</span> you <br />
            </Title>
            <Text color="dimmed" mt="md">
              For room / roommate 1000+ private rooms! Looking for a roommate?
              Or are you looking for a house for rent? if you are looking for an
              apartment Accommodation ! Here you can find out about the lodging
              and the underpass Do not waste your time!!
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>For room / roommate</b> – 1000+ private rooms
              </List.Item>
              <List.Item>
                <b>House for rent</b> – Available house for rent all around the
                world
              </List.Item>
              <List.Item>
                <b>Apartment</b> – 1000+ Available apartment accommodation
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                component="a"
                target="_blank"
                href="https://bnc.lt/diNm/gXarFVq2IB?referral=0000e130&path=login"
              >
                Take a look
              </Button>
            </Group>
          </div>
          <Image
            src={"/best.svg"}
            className={classes.image}
            alt="service section"
          />
        </div>
      </Container>
    </div>
  );
}
