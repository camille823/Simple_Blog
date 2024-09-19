import markdownit from 'markdown-it';

const parser = new markdownit();

export const createExcerpt = (body) => {
  return parser
    .render(body)
    .split('\n')
    .slice(0, 6)
    .map((str) => {
      return str.replace(/<\/?[^>]+(>|$)/g, '').split('\n');
    })
    .flat()
    .join(' ');
};
