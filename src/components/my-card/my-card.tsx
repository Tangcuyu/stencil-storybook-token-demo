/**
 * This is a demo for design tokens apply with figma
 */

import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * ----------------------------------
   * 1.私有属性
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 2.对WebComponent组件自身的元素引用
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 3.应用State()装饰器的变量
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 4.应用Prop()装饰器的公共属性API
   * 每个Prop后面是对应的@Watch()监听事件处理器
   * ----------------------------------
   */
  /** (optional) Link card */
  @Prop() to?: string = '';

  /**  可选属性 卡片标签 */
  @Prop() label?: string = '';

  /** 是否有阴影 */
  @Prop() bgshadow: boolean = true;

  /**
   *  可选属性 可链接卡片的目标
   *  {string}
   */
  @Prop() target?: string = '';

  /**
   *  可选属性 卡片引用
   * {string}
   */
  @Prop() rel?: string = '';

  /**
   *  可选属性 可注入的CSS样式
   * {string}
   */
  @Prop() styles?: string;
  /**
   * ----------------------------------
   * 5.自定义事件部分
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 6.组件生命周期部分
   * ----------------------------------
   */

  connectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillRender() {}
  componentDidRender() {}
  disconnectedCallback() {}
  /**
   * ----------------------------------
   * 7.事件监听器
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 8.应用Method()装饰器的公共方法
   * ----------------------------------
   */

  /**
   * ----------------------------------
   * 9.私有的本地方法
   * ----------------------------------
   */
  private getCssClassMap() {
    return classNames('card', !!this.to && 'card--interactive', this.bgshadow && 'card__shadow');
  }
  /**
   * ----------------------------------
   * 10.render()函数
   * ----------------------------------
   */

  render() {
    const Tag = !!this.to ? 'a' : 'div';
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}

        <div class="card-border" part="border">
          <Tag
            class={this.getCssClassMap()}
            part={classNames('base', !!this.to && 'interactive')}
            {...(!this.to ? { role: 'group' } : {})}
            {...(!!this.to ? { href: this.to } : {})}
            {...(!!this.target ? { target: this.target } : {})}
            {...(!!this.rel ? { rel: this.rel } : {})}
            {...(!!this.label ? { ['aria-label']: this.label } : {})}
          >
            <div class="card__body" part="body">
              <slot></slot>
            </div>
          </Tag>
        </div>
      </Host>
    );
  }
}
