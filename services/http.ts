export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

const get = async (url: string): Promise<Todo[]> => {
  const response = await globalThis.fetch(url);
  const dto = await response.json();

  return dto;
};

export const http = {
  get,
};
