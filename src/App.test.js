import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,mount } from 'enzyme';
import App from './App';
import Form from './components/Form';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Form', () => {
  it('should be defined', () => {
    expect(Form).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Form name='button test' />
    );
    expect(tree).toMatchSnapshot();
  });
 });

 
