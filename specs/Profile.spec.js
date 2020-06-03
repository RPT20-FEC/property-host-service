import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Profile from '../client/src/components/Profile';

var moment = require('moment');

const sampleData = require('../database/sampleData.js');

describe('Profile photo component', function() {
  let wrapper = shallow(<Profile host={sampleData} propertyId='1001'/>);

  it('should render all elements correctly without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.avatar').length).toBe(1);
    expect(wrapper.find('.name').length).toBe(1);
    expect(wrapper.find('.date').length).toBe(1);

  });

  it('should render Superhost icon if the host is a Superhost', function() {
    expect(wrapper.find('.image').length).toBe(1);
    expect(wrapper.find('.icon').length).toBe(1);

  });

  it('should not render Superhost icon if the host is not a Superhost', function() {
    sampleData.superhost = false;
    wrapper = shallow(<Profile host={sampleData} propertyId='1001'/>);
    expect(wrapper.find('.image').length).toBe(1);
    expect(wrapper.find('.icon').length).toBe(0);
    sampleData.superhost = true;
  });

  it('should render the name of the host', function() {
    expect(wrapper.find('.name').text()).toEqual('Hosted by ' + sampleData.name);
  });

  it('should render the joined at date in the correct format', function() {
    expect(wrapper.find('.date').text()).toEqual('Joined in ' + moment(sampleData.joined_at).format("MMMM YYYY"));
  });


});
