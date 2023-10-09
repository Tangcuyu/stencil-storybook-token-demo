import { html } from 'lit-html';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  theme: {
    name: '组件主题',
    description: 'Global theme for components',
    defaultValue: 'brand-a-theme',
    toolbar: {
      // array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'brand-a-theme', title: '主题A' },
        { value: 'brand-b-theme', title: '主题B' },
      ],
    },
  },
};

// const storyWithTheme=(story, context)=>{
//   console.log(context.globals.theme);
//   const theme = context.globals.theme;
//   return (
//     (story) => html`<div class='${theme}'>${story()}</div>`
//   )
// }

// export const decorators = [storyWithTheme];

export const decorators = [(story, context) => html`<div class="${context.globals.theme}">${story()}</div>`];

// export const decorators = [(story) => html`<div class='${theme}'>${story()}</div>`]
