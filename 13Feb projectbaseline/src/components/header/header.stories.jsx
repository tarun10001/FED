import { Header } from "./header.jsx";

export default {
  title: "Homepage/Header",
  component: Header,
  argTypes: {
    alert: {
      name: alert,
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const Disclaimer = Template.bind({});
Default.args = {
  alert: "",
};

Disclaimer.args = {
  alert:
    "This study is now closed. For current opportunities, browse our studies page.",
};
