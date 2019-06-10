import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import GCascader from '../../src/g-cascader/g-cascader'
chai.use(sinonChai);

describe('cascader 存在', () => {
    it('存在.', () => {
        expect(GCascader).to.exist
    })
});
