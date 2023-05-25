import  Homepage  from "./Homepage.jsx";

export default {
  title: "Pages/Homepage",
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

export const Default = Template.bind({});