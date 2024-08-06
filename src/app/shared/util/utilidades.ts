export function convertirEnURL(cadena: string): string {
    return String(cadena.toLowerCase()).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(' ', '-');
}