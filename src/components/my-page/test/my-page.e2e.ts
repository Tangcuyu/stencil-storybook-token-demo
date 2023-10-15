import { newE2EPage } from '@stencil/core/testing';

describe('my-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-page></my-page>');

    const element = await page.find('my-page');
    expect(element).toHaveClass('hydrated');
  });
});
