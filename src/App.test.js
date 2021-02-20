import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('AppComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('check if parameterState changes', () => {
    const wrapper = mount(<App />);
    wrapper.instance().sortByParameter("age");
    expect(wrapper.state().parameterState).toEqual("age");
  });
    
  it('check date comparison', () => {
    const wrapper = mount(<App />);
    let res = wrapper.instance().compareDates({
        name: "Ross Geller",
        birth: "11/30/2010"
    }, {
        name: "Mike Ross",
        birth: "09/20/1992"
    });
    expect(res).toEqual(1);
  });

  it('check name comparison', () => {
    const wrapper = mount(<App />);
    let res = wrapper.instance().compareNames({
        name: "Ross Geller",
        birth: "11/30/2010"
    }, {
        name: "Mike Ross",
        birth: "09/20/1992"
    });
    expect(res).toEqual(1);
  });
});
