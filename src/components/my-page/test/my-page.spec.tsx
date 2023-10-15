import { newSpecPage } from '@stencil/core/testing';
import { MyPage } from '../my-page';

describe('my-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPage],
      html: `<my-page></my-page>`,
    });
    expect(page.root).toEqualHtml(`
      <my-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-page>
    `);
  });
});
