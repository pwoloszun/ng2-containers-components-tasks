export interface SearchService<T> {
  search(query: string): Promise<T[]>;
}
