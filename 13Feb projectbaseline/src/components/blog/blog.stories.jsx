import { Blog } from "./blog.jsx";

export default {
  title: "Homepage/Blog",
  component: Blog,
};

const Template = (args) => <Blog {...args} />;
export const Default = Template.bind({});