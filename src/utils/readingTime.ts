/**
 * Calcula el tiempo estimado de lectura en minutos a partir de un texto en Markdown o HTML.
 * Promedio de lectura: 200 palabras por minuto.
 */
export function getReadingTime(content: string = ''): string {
    const cleanText = content
        .replace(/<[^>]*>/g, '') // Eliminar tags HTML
        .replace(/#+\s/g, '')     // Eliminar símbolos de encabezados markdown
        .replace(/`{3}[\s\S]*?`{3}/g, '') // Eliminar bloques de código
        .trim();

    const words = cleanText.split(/\s+/).filter((word) => word.length > 0).length;
    const minutes = Math.ceil(words / 200);

    if (minutes <= 1) {
        return '1 min de lectura';
    }
    return `${minutes} min de lectura`;
}
