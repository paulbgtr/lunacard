import { YStack } from "tamagui";
import { Pets } from "components/Pets";
import { pets } from "data/pets";

export default function TabOneScreen() {
  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
      <Pets pets={pets} />
    </YStack>
  );
}
