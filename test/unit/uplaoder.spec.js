import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '../../src/g-uploader/g-uploader.vue'
import http from '../../src/g-uploader/http.js'


chai.use(sinonChai);

describe('Uploader.vue', () => {
    it('存在.', () => {
        expect(Uploader).to.exist
    });


    it('可以上传一个文件', () => {

        http.post = ()=>{
            console.log('假的post');
        };
        // let stub = sinon.stub(http, 'post').callsFake((url, options) => {
        //     console.log("假的post");
        //     setTimeout(function () {
        //         options.success('{"id": "123123"}')
        //     }, 100)
        // });



        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/upload',
                method: 'post',
                parseResponse: (response) => {
                    let object = JSON.parse(response);
                    return `/preview/${object.id}`
                },
                fileList: []
            },
            slots: {default: `<button id="x">click me</button>`},
            listeners: {
                'update:fileList': (fileList) => {
                    console.log('start');
                    wrapper.setProps({fileList})
                },
                'uploaded': () => {
                    console.log('update');
                    expect(wrapper.find('use').exists()).to.eq(false);
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123123');
                    stub.restore();

                }
            }
        });

        console.log(wrapper.html());
        wrapper.find('#x').trigger('click');
        console.log(wrapper.html());
        let inputWrapper = wrapper.find('input[type="file"]');
        let input = inputWrapper.element;

        //
        //
        let file1 = new File(['sssssss'], 'xxx.txt');
        let file2 = new File(['yyyyy'], 'yyy.txt');


        const data = new DataTransfer();
        data.items.add(file1);
        data.items.add(file2);
        input.files = data.files;



        // console.log('begin');

        // let use = wrapper.find('use');
        // expect(use.getAttribute('xlink:href')).to.eq('#i-waiting')

    })
});
