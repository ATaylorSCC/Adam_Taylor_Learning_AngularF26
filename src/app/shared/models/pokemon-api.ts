export interface PokemonApi {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string | null;
  };
}
