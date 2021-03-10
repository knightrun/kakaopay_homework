import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'
import phoneData from "~/static/json/phoneData.json";

@Component
export default class Birthday extends Vue {
  private year: string
  private month: string
  private day: string

  get yearList(){
    return []
  }

  get monthList(){
    return []
  }

  get dayList(){
    return []
  }

  onInput(){
    this.$emit('input', `${this.year}-${this.month}-${this.day}`)
  }

  render(h: CreateElement): VNode {
    return (
        <div class="birthday_wrap row">
          <span>생년월일</span>
          <custom-select
              id="year"
              ref="year"
              optionTitle="선택"
              options={this.yearList}
              onInput={this.onInput}
              v-model={this.year}
          />
          <custom-select
              id="nationNo"
              ref="nationNo"
              optionTitle="선택"
              options={this.monthList}
              onInput={this.onInput}
              v-model={this.month}
          />
          <custom-select
              id="nationNo"
              ref="nationNo"
              optionTitle="선택"
              options={this.dayList}
              onInput={this.onInput}
              v-model={this.day}
          />
        </div>
    )
  }
}
