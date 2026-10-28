/** Путь к файлу из public с учётом каталога публикации. */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
