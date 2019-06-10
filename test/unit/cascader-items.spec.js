import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import GCascaderItems from '../../src/g-cascader/g-cascader-items'
chai.use(sinonChai);

describe('cascaderItems 存在', () => {
    it('存在.', () => {
        expect(GCascaderItems).to.exist
    })
});
