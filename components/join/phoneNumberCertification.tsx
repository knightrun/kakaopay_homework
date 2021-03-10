import {CreateElement, VNode} from 'vue'
import {Component, Prop, Vue} from 'nuxt-property-decorator'

//json
import phoneData from '@/static/json/phoneData.json'

@Component
export default class PhoneNumberCertification extends Vue {
  $refs!: Vue['$refs'] & {
    nationNo: HTMLDivElement,
    phoneNo: HTMLDivElement
  }

  private nationNo: string = ''
  private phoneNo: number | string = ''

  onInput() {
    this.$emit('input', this.nationNo + this.phoneNo)
  }

  selfCert() {
    window.open('')
  }

  render(h: CreateElement): VNode {
    return (
        <div class="certification row">
          <span>휴대폰</span>
          <div class="phone-number_wrap">
            <custom-select
                id="nationNo"
                ref="nationNo"
                optionTitle="선택"
                options={phoneData}
                onInput={this.onInput}
                v-model={this.nationNo}
            />
            <text-input
                type="tel"
                id="phoneNo"
                ref="phoneNo"
                class="text_wrap"
                className={{label: 'screen-out'}}
                label="전화번호 입력"
                placeholder="전화번호 입력"
                onInput={this.onInput}
                v-model={this.phoneNo}
            />
          </div>
          <div class="btn-wrap">
            <button type="button" class="btn btn-cert" onClick={this.selfCert}>인증</button>
          </div>
        </div>
    )
  }
}
