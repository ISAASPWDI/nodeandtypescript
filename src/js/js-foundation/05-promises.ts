import { http } from '../../plugins';

//Promesas
export const getPokemonById =  async (id: string | number): Promise<string> => {   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res =  await http.get(url);
    const { data } = res;
    return data.name;
}

