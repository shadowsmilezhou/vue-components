import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import TabsPane from '../../src/g-tabs/g-tabs-panel'

chai.use(sinonChai);

describe('TabsPane.vue', () => {
  it('存在.', () => {
    expect(TabsPane).to.exist
  })
});
