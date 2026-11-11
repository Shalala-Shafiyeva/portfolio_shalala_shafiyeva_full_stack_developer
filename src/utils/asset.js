// Путь к файлу из public/ с учётом base (работает и на GitHub Pages в подпапке)
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
