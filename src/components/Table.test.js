import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Table from './Table';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const people = [
  {
    name: "John Sina",
    birth: "11/30/2011"
  }, {
    name: "Barcy Washington",
    birth: "09/16/1992"
  }, {
    name: "Peter Parker",
    birth: "01/16/1992"
  }, {
    name: "Jimmy Shergil",
    birth: "12/12/2001"
  }, {
    name: "Alexander Alfred",
    birth: "02/09/1891"
  }, {
    name: "Krishna Gupta",
    birth: "12/01/1982"
  }, {
    name: "Sania Mirza",
    birth: "11/30/2011"
  }, {
    name: "Lata Pathak",
    birth: "10/31/1999"
  }
];

describe('TableComponent', () => {
  it('Table renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table people={people} />, div);
  });

  it('check number of rows rendered', () => {
    const table = mount(<Table people={people} />);
    let el = table.find('tr');
    expect(el.length).toEqual(9);
  });
});
