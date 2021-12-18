import React from 'react';
import Input from 'components/Input';


import { render, cleanup, screen } from '@testing-library/react';


afterEach(cleanup);
it('renders okay', () => {
  render(<Input loading={false} text={'Prueba'} />);
  expect(screen.getByTestId('input-test')).toBeInTheDocument();
});


it('renders svg when loading is activated', () => {
  render(<Input disabled={false} loading={true} text={'Hola'} />);
  expect(screen.getByTestId('input-test')).toMatchSnapshot();
});