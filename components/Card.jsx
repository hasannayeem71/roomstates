import {
    Button,
    Card,
    createStyles,
    Group,
    Image,
    SimpleGrid,
    Text
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

function CardWithStats({ image, title, description }) {
  const { classes } = useStyles();

  return (
    <Card withBorder p="lg" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={250} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text size="sm" weight={700} className={classes.title}>
          {title}
        </Text>
        <Text style={{ visibility: "hidden" }}>shdfksfj</Text>
      </Group>
      <Text mt="sm" mb="md" color="dimmed" size="xs">
        {description}
      </Text>
      <Card.Section className={classes.footer}>
        <Button>Read More</Button>
      </Card.Section>
    </Card>
  );
}

const Cards = () => {
  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      mt="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      <CardWithStats
        title="Room / Roommate"
        description="1000+ Private Rooms"
        image="https://roomstates.us/wp-content/uploads/2022/03/pic03.jpg"
      />

      <CardWithStats
        title="Home / Sublet"
        description="Looking for a house or an underpass, Visit..."
        image="https://roomstates.us/wp-content/uploads/2022/03/pic04.jpg"
      />
      <CardWithStats
        title="Apartment"
        description="A flat for rent, if you are looking for an apartment."
        image="https://roomstates.us/wp-content/uploads/2022/07/rent3.jpg"
      />
    </SimpleGrid>
  );
};
export default Cards;
