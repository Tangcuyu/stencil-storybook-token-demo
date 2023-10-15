import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Page',
  argTypes: {
    label: { control: 'text' },
  },

  parameters: {
    notes: readme,
  },
};

const Template = ({ label }) => html`<my-page label=${label} /> `;

export const MultiTheme = Template.bind({});
MultiTheme.args = {
  label: 'Multi theme button',
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
