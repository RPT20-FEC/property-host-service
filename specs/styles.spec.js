import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import {
  Bold, Info, ContactHost, Note, NoteIcon, Cols, StatsData, Date, Title, Name, Avatar, Top, Image, Icon, ReadMore
} from '../client/src/components/styledComponents'
const sampleData = require('../database/sampleData.js');


describe('Styles - React Styled Components', () => {
  it('Info block renders correctly', () => {
    const tree = renderer
    .create(<Info></Info>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Note Icon renders correctly', () => {
    const tree = renderer
    .create(<NoteIcon></NoteIcon>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Note renders correctly', () => {
    const tree = renderer
    .create(<Note></Note>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Stats columns renders correctly', () => {
    const tree = renderer
    .create(<Cols></Cols>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('StatsData renders correctly', () => {
    const tree = renderer
    .create(<StatsData></StatsData>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Top component renders correctly', () => {
    const tree = renderer
    .create(<Top></Top>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Contact Host button renders correctly', () => {
    const tree = renderer
    .create(<ContactHost></ContactHost>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Bold text renders correctly', () => {
    const tree = renderer
    .create(<Bold>During your stay</Bold>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Avatar renders correctly', () => {
    const tree = renderer
    .create(<Avatar></Avatar>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Avatar image renders correctly', () => {
    const tree = renderer
    .create(<Image></Image>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Superhost icon on avatar renders correctly', () => {
    const tree = renderer
    .create(<Icon></Icon>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Title joined renders correctly', () => {
    const tree = renderer
    .create(<Title></Title>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Date joined renders correctly', () => {
    const tree = renderer
    .create(<Date></Date>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Name renders correctly', () => {
    const tree = renderer
    .create(<Name></Name>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('Read more button renders correctly', () => {
    const tree = renderer
    .create(<ReadMore></ReadMore>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});



