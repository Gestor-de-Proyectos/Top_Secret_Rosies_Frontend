import React from 'react';
import PrivateComponent from 'components/PrivateComponent';
import { UserContext } from 'context/userContext';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);


it('renders the page when roles match', () => {
  render(
    <UserContext.Provider value={{ userData: { rol: 'ADMINISTRADOR' } }}>
      <PrivateComponent roleList={['ADMINISTRADOR']}>
        <div data-testid='authorized'>Page</div>
      </PrivateComponent>
    </UserContext.Provider>
  );


  expect(screen.getByTestId('authorized')).toHaveTextContent('Page');
});

it('renders the page when roles match', () => {
    render(
      <UserContext.Provider value={{ userData: { rol: 'ESTUDIANTE' } }}>
        <PrivateComponent roleList={['ESTUDIANTE']}>
          <div data-testid='authorized'>Page</div>
        </PrivateComponent>
      </UserContext.Provider>
    );
  
  
    expect(screen.getByTestId('authorized')).toHaveTextContent('Page');
  });



