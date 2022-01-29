// describe() 연관된 테스트 케이스를 그룹화하는 api
// test() 하나의 테스트 케이스를 작성하는 api
// expect().tobe() expect에 작성된 코드의 결과가 tobe일 거라고 기대한다.
// expect().not.tobe() tobe에 대한 부정.

import SignupForm from './SignupForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('SignupForm.vue', () => {
  test('ID는 이메일 형식을 검증할 수 있어야 한다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const usernameValid = wrapper.vm.isUsernameValid;
    expect(usernameValid).not.toBeTruthy();
  });

  test('ID와 PW, 닉네임이 입력되지 않으면 회원가입 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'a@a.com',
          password: '1234',
          nickname: 'User A',
        };
      },
    });
    const button = wrapper.find('button');
    // expect(button.element.disabled).toBeTruthy();
    expect(button.element.disabled).not.toBeTruthy();
  });
});
