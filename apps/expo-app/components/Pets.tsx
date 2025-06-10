import { Card, H2, H4, YStack } from "tamagui";
import type { Pet } from "types/pet";

export function Pets({ pets }: { pets: Pet[] }) {
  const missingPets = pets.filter((pet) => pet.isMissing);
  const presentPets = pets.filter((pet) => !pet.isMissing);

  return (
    <YStack $maxMd={{ flexDirection: "column" }} space>
      <YStack>
        <H2>Present Pets</H2>
        {presentPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </YStack>

      <YStack>
        <H2>Missing Pets</H2>
        {missingPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </YStack>
    </YStack>
  );
}

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Card elevate size="$4" bordered>
      <Card.Header padded>
        <H4>{pet.name}</H4>
      </Card.Header>
    </Card>
  );
}
