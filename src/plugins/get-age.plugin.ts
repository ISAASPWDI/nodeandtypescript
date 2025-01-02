//Patrón adaptador para el plugin get-age

export const getAge = (birthdate: string) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
