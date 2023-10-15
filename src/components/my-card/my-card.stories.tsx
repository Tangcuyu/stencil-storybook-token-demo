import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Card',
  argTypes: {
    label: { control: 'text' },
    bgshadow: { control: 'boolean' },
    target: {
      control: {
        type: 'text',
      },
    },
  },

  parameters: {
    notes: readme,
  },
};

const Template = ({ label, target, bgshadow }) => html`<my-card bgshadow=${bgshadow} label=${label} target=${target}
  ><div style="margin: -24px">
    <img style="margin-bottom: -4px; width: 100%" src="http://img.touxiangwu.com/2020/3/U3e6ny.jpg" alt="placeholder" />
    <div style="padding: 24px">A card with a full width image</div>
  </div>
</my-card>`;

export const MultiTheme = Template.bind({});
MultiTheme.args = {
  size: 'large',
  target: 'https://iot.itsi.com.cn',
  bgshadow: true,
  label: 'Multi theme card',
};

// export const ThemeB = Template.bind({});
// ThemeB.args = {
//   size: 'large',
//   variant: 'secondary',
//   disabled: false,
//   label: 'Foo bar BBB',
// };

// export const ButtonThemeA = ({ label, variant, size, disabled }) => html`
//   <my-button
//     size=${size}
//     variant=${variant}
//     disabled=${disabled}
//     label=${label}
//     />
// `;

// ButtonThemeA.args = {
//   size: 'large',
//   variant: 'primary',
//   disabled: false,
//   label: 'Foo bar baz',
// };
