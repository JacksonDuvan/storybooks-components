import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    componenet: MyLabel,
    argTypes: {
        size: { control: 'radio', options: ['normal', 'h1', 'h2', 'h3'] },
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal',
    label: 'Hola Mundo'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true,
    label: 'Hola Mundo',
    color: 'secondary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    fontColor: '#5517ac'
}
