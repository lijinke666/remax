import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Ad from '../../../adapters/wechat/components/Ad';

describe('Ad', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Ad unitId="id" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});