import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Stats from '../client/src/components/Stats';
import styledComponents from '../client/src/components/styledComponents';
const sampleData = require('../database/sampleData.js');

describe('Stats component', function() {
  let wrapper = shallow(<Stats superhost={sampleData.superhost} reviews={sampleData.reviews} verified={sampleData.verified}/>);

  it('should render all elements correctly without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.reviews').length).toBe(1);
    expect(wrapper.find('.check').length).toBe(1);
  });

  it('should show the correct number of reviews', function() {
    expect(wrapper.find('.reviews').text()).toEqual(' ' + sampleData.reviews + ' Reviews ');
  });

  it('should render Superhost badge if the host is a Superhost', function() {
    expect(wrapper.find('.superhost-stats').length).toBe(1);
    expect(wrapper.find('.superhost-stats-copy').text()).toEqual(' Superhost ');

  });

  it('should not render Superhost copy if the host is not a Superhost', function() {
    sampleData.superhost = false;
    wrapper = wrapper = shallow(<Stats superhost={sampleData.superhost} reviews={sampleData.reviews} verified={sampleData.verified}/>);
    expect(wrapper.find('.superhost-stats').length).toBe(0);
    expect(wrapper.find('.reviews').length).toBe(1);
    sampleData.superhost = true;
  });
  it('should render verified checkmark if the host has been verified', function() {
    expect(wrapper.find('.check').length).toBe(1);
    expect(wrapper.find('.verified').text()).toEqual('Verified ');

  });
  it('should not render verified checkmark if the host has not been verified', function() {
    sampleData.verified = false;
    wrapper = wrapper = shallow(<Stats superhost={sampleData.superhost} reviews={sampleData.reviews} verified={sampleData.verified}/>);
    expect(wrapper.find('.check').length).toBe(0);
    sampleData.verified = false;
  });

});