import { ComponentMeta, ComponentStory } from "@storybook/react";
// import { MyLabel } from "../../components/MyLabel";
import { Text } from './Text'

export default {
    title: 'Example/MyText',
    componenet: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>

export const Basic = Template.bind({})

export const AllCaps = Template.bind({})

export const Secondary = Template.bind({})