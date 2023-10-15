/**
 * This is a demo for design tokens apply with figma
 */
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-page',
  styleUrl: 'my-page.css',
  shadow: true,
})
export class MyPage {
  render() {
    return (
      <Host>
        <my-card to="http://">
          <div class="card-header">
            <span>Card name</span>
            <my-button size="large" variant="tertiary" label="选项按钮" />
          </div>
        </my-card>
      </Host>
    );
  }
}
