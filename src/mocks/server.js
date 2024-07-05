import { rest } from 'msw';

const handlers = [
  rest.post('https://codebuddy.review/submit', (req, res, ctx) => {
    // Mock response data
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Success',
        data: req.body, // Echo back the submitted data for testing
      })
    );
  }),

  rest.get('https://codebuddy.review/posts', (req, res, ctx) => {
    // Mock response data
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, firstName: 'John', lastName: 'Doe', writeup: 'Sample post', image: '', avatar: '' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', writeup: 'Another post', image: '', avatar: '' },
      ])
    );
  }),
];

export { handlers };
