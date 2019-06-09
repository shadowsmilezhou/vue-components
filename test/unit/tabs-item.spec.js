import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import TabsItem from '../../src/g-tabs/g-tabs-item'
chai.use(sinonChai)

describe('TabsItem.vue', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
})
