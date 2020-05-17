import React from 'react';
import { shallow, mount, render } from 'enzyme';
const app = require('../server/index.js');
import $ from 'jquery';
const supertest = require('supertest');
const request = supertest(app);
const time = require('./util/time');
const sinon = require('sinon');
sinon.stub(time, 'setTimeout');
import App from '../client/src/components/App';
import Host from '../client/src/components/Host';


const sampleData = require('../database/sampleData.js');

describe('App component', function() {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const wrapper = shallow(<App id='1003' />);

  it('should render without throwing an error', function() {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains(<div className="main"></div>)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.main').length).toBe(1);
  });

  it('should create a short desc when the description is longer than 180 characters', function() {
    wrapper.instance().renderShortDesc(sampleData);
    expect(wrapper.state().host.descShort).toBeTruthy();
    expect(wrapper.state().host.duringStayLess).toBeTruthy();

  });

  it('should get data', async () => {
    const ajaxSpy = jest.spyOn($, 'ajax');
    const wrapper = shallow(<App id='1003' />);
    wrapper.instance().fetchData('1003');
    expect(wrapper.state().host).toBe({
              id: 3,
              name: 'Tribe',
              description: 'Tribe is a lifestyle brand, here to bring the most refined properties in the city.',
              reviews: 127,
              verified: true,
              superhost: false,
              coHost: [2],
              joined_at: '2019-11-18T05:05:26.037Z',
              languages: 'English',
              responseTime: 'within an hour',
              responseRate: 92,
              location: 'San Jose, CA',
              avatarUrl: 'http://localhost:3001/assets/avatars/3.jpg'
            });
    // expect(ajaxSpy).toBeCalledWith({
    //   type: 'GET',
    //   url: 'http://localhost:3001/listings/1003/hosts',
    //   error: ['renderShortDesc'],
    //   success: null

    // });
  });

});
