import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import { renderWithProviders } from '../../../shared/utils/test-utils';

const dummyListUser = [
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
  },
  {
    'id': 2,
    'name': 'Hoa',
    'username': 'Hoa Nguyen 2',
    'email': '12345@gmail.com',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  }
];

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.json(dummyListUser));
  }),
);

describe('Users List Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  describe('Fetching Users', () => {
    test('Success!', async () => {
      renderWithProviders(<UserList />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('user-list')).toBeInTheDocument();
      });
      expect(screen.getByText(`${dummyListUser[0]['name']}`)).toBeInTheDocument();
      const anchorElement = screen.getByTestId('user-1');
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute('href', '/user-info/1');
    });

    test('Dont Have User!', async () => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
          return res(ctx.json([]));
        }),
      );
      renderWithProviders(<UserList />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('user-list')).toBeInTheDocument();
      });
      expect(screen.getByText('Dont have a user')).toBeInTheDocument();
    });

    test('Fetching Users Fail!', async () => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
          return res(ctx.status(500));
        }),
      );
      renderWithProviders(<UserList />);
      expect(screen.getByText('Loading')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByTestId('error')).toBeInTheDocument();
      });
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
