import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

//components
import PhoneNumber from "~/components/common/form/phoneNumber"

//type
import { IRadioList } from '@/typings/state'

@Component
export default class JoinForm extends Vue {
  private userId: string = ''
  private userPassword: string = ''
  private gender: string = 'male'
  private radioList: IRadioList[] = [
    { label:'남자', value:'male' },
    { label:'여자', value:'female' },
  ]
  private agree: boolean = false
  private phoneNo: string = ''

  submit(){
    return false
  }

  selfCert(){
    window.open('')
  }

  render(h: CreateElement): VNode {
    // @ts-ignore
    return (
        <div class="join_form">
          <h1 class="title">회원가입</h1>
          <div class="required">* 필수입력</div>
          <form onSubmit={ this.submit }>
            <div class="text_wrap">
              <text-input
                  id="userId"
                  ref="userId"
                  class="row"
                  label="아이디*"
                  placeholder="아이디를 입력하세요"
                  v-model={ this.userId }
              />
              <text-input
                  id="userPassword"
                  ref="userPassword"
                  class="row"
                  type="password"
                  label="비밀번호*"
                  placeholder="비밀번호를 입력하세요"
                  v-model={ this.userPassword }
              />
            </div>
            <div class="gender_wrap">
              <span>성별</span>
              <radio-input
                  v-model={ this.gender }
                  items={ this.radioList }
                  group="gender"
                  className={ {input: 'screen-out', label: ''} }
              />
            </div>
            <div class="birthday_wrap row">
              <span>생년월일</span>
            </div>
            <div class="phone_wrap row">
              <span>휴대폰</span>
              <PhoneNumber v-model={ this.phoneNo } />
              <div class="btn-wrap">
                <button type="button" class="btn btn-cert" onClick={ this.selfCert }>인증</button>
              </div>
            </div>
            <div class="agree_wrap">
              <span class="agree_txt">모든 약관 내용에 동의합니다.</span>
              <checkbox-input
                  id="agree"
                  v-model={ this.agree }
                  className={ {input: 'screen-out', label: 'screen-out'} }
                  label="동의하기"
              />
            </div>
            <div class="btn-wrap">
              <button type="submit" class="btn btn-join">가입하기</button>
            </div>
          </form>
        </div>
    )
  }
}
