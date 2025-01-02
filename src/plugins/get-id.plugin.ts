//Patrón adaptador para el plugin UUID
import { v4 as UUID } from 'uuid';

export const getId = () => {
    return UUID();
}
