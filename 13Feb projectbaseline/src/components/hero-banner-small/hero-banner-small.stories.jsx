import { HeroBannerSmall } from "./hero-banner-small.jsx";

export default {
  title: "Homepage/HeroBannerSmall",
  component: HeroBannerSmall,
};

const Template = (args) => <HeroBannerSmall {...args} />;
export const Default = Template.bind({});