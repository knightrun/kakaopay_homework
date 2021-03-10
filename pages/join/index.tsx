import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

//component
import RequiredForm from "~/components/join/requiredForm"

//style
import '~/assets/styles/join.scss'

@Component
export default class Join extends Vue {
  render(h: CreateElement): VNode {
    return (
      <section class="join">
        <RequiredForm />
      </section>
    )
  }
}
