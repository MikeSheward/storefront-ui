import { storiesOf } from "@storybook/vue";
import SfCircleButton from "./SfCircleButton.vue";

export default storiesOf("CircleButton", module)
  .add("with icon prop", () => ({
    components: { SfCircleButton },
    template: "<sf-circle-button icon='/added_to_cart.svg'/>"
  }))
  .add("with secondary modifier", () => ({
    components: { SfCircleButton },
    template:
      "<sf-circle-button class='sf-circle-button--secondary' icon='/added_to_cart.svg'/>"
  }))
  .add("with small modifier and close icon", () => ({
    components: { SfCircleButton },
    template:
      "<sf-circle-button class='sf-circle-button--small' icon='/close.svg'/>>"
  }));
