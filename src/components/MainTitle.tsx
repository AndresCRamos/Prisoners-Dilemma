import { Center, Grid, Text, Title } from "@mantine/core";

function MainTitle() {
  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center>
            <Title
              order={1}
              className="bg-gradient-to-t from-[--mantine-primary-color-filled] inline-block text-transparent bg-clip-text"
            >
              The Prisoners Dilemma
            </Title>
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center className="flex-col">
            <Title order={2} size="xl" className="font-semibold">
              The most famous game theory paradox
            </Title>
            <Text className="font-light">
              A game about cooperation, betrayal and life
            </Text>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default MainTitle;
