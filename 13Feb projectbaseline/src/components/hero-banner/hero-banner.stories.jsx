import { HeroBanner } from "./hero-banner.jsx";

export default {
  title: "Homepage/HeroBanner",
  component: HeroBanner,
};

const Template = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});