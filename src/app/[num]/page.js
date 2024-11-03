import Gen from "@/components/Gen";

const Pokedex = async ({ params }) => {

  const { num } = await params;
  const gen = num.split('_');

  return (
      <Gen gen={gen} />
  );
}

export default Pokedex;