// describe() 연관된 테스트 케이스를 그룹화하는 api
// test() 하나의 테스트 케이스를 작성하는 api
// expect().tobe() expect에 작성된 코드의 결과가 tobe일 거라고 기대한다.
// expect().not.tobe() tobe에 대한 부정.

import LoginForm from './LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
