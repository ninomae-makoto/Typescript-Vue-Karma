import { shallow } from "@vue/test-utils"
import TestComponent from "./../components/Hello.vue"

describe("Hello.vue", () => {
  it("Karma Sample 初期値の検証", () => {
    const wrapper = shallow(TestComponent)
    chai.expect(wrapper.find("div").find("div").text()).contains("Hello World")

  })
  it("Karma Sample 入力の検証", () => {
    const wrapper = shallow(TestComponent)
    wrapper.setData({ inputValue: "Hello Karma" })
    chai.expect(wrapper.find("div").find("div").text()).contains("Hello Karma")

  })
})
