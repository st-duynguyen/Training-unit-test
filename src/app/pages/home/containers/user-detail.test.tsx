import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitFor } from '@testing-library/react';
import UserDetail from './UserDetail';
import { renderWithProviders } from '../../../shared/utils/test-utils';

const dummyListUser =
  {
    'id': 1,
    'name': 'Duy',
    'username': 'Duy Nguyen',
    'email': '123@gmail.com',
    'address': {
      'street': 'aaaaaa',
      'suite': 'aaaaaa',
      'city': 'aaaaaaa',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  };

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
    return res(ctx.json(dummyListUser));
  }),
);

describe('Users Detail Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  describe('Fetching User Detail', () => {
    test('Success!', async () => {
      renderWithProviders(<UserDetail />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('user-detail')).toBeInTheDocument();
      });
      expect(screen.getByText(`${dummyListUser['name']}`)).toBeInTheDocument();
    });

    test('Dont have a user!', async () => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
          return res(ctx.json(null));
        }),
      );
      renderWithProviders(<UserDetail />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByText('USER DETAIL')).toBeInTheDocument();
      });
      expect(screen.getByText('Dont have a user')).toBeInTheDocument();
    });

    test('Fetching Users Fail!', async () => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
          return res(ctx.status(500));
        }),
      );
      renderWithProviders(<UserDetail />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument();
      });
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
