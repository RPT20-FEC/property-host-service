import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Description from '../client/src/components/Description';

const sampleData = require('../database/sampleData.js');

describe('Host description component', function() {
  let wrapper = shallow(<Description less={sampleData.description.substr(0, 180)} more={sampleData.description}/>);

  it('should render description about the host correctly without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.desc').length).toBe(1);
  });

  it('should show read more button if the description is longer than 180 characters', function() {
    wrapper = shallow(<Description less={sampleData.description.substr(0, 180)} more={sampleData.description}/>);
    expect(wrapper.find('.readMore').text()).toEqual('read more');
    expect(wrapper.find('.descText').text()).toEqual(sampleData.description.substr(0, 180) + '...\u00a0read more');
  });

  it('should show full description and remove read more button when user clicks on Read More button', function() {
    wrapper.find('.readMore').simulate('click');
    expect(wrapper.find('.readMore').length).toBe(0);
    expect(wrapper.find('.desc').text()).toEqual(sampleData.description);
  });

  it('should not show read more button if the description is less than 180 characters', function() {
    let desc = sampleData.description;
    sampleData.duringStay = 'very short description';
    wrapper = shallow(<Description more={sampleData.description}/>);
    expect(wrapper.find('.readMore').length).toBe(0);

    sampleData.description = desc;
  });



});
