/** @format */
export const image_url = process.env.IMAGE_URL;
export const api_url = process.env.API_URL;

export const api = (path: string) =>
  fetch(api_url + path, {
    headers: {
      ["x-api-key"]: process.env.API_KEY!,
    },
    next: {
      revalidate: 0,
    },
  });
