/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "disabled"?: boolean;
        "label": string;
        "size"?: 'small' | 'large';
        "variant"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface MyCard {
        /**
          * 是否有阴影
         */
        "bgshadow": boolean;
        /**
          * 可选属性 卡片标签
         */
        "label"?: string;
        /**
          * 可选属性 卡片引用 {string}
         */
        "rel"?: string;
        /**
          * 可选属性 可注入的CSS样式 {string}
         */
        "styles"?: string;
        /**
          * 可选属性 可链接卡片的目标 {string}
         */
        "target"?: string;
        /**
          * (optional) Link card
         */
        "to"?: string;
    }
    interface MyPage {
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyPageElement extends Components.MyPage, HTMLStencilElement {
    }
    var HTMLMyPageElement: {
        prototype: HTMLMyPageElement;
        new (): HTMLMyPageElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-card": HTMLMyCardElement;
        "my-page": HTMLMyPageElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "disabled"?: boolean;
        "label"?: string;
        "onButtonClicked"?: (event: CustomEvent<any>) => void;
        "size"?: 'small' | 'large';
        "variant"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface MyCard {
        /**
          * 是否有阴影
         */
        "bgshadow"?: boolean;
        /**
          * 可选属性 卡片标签
         */
        "label"?: string;
        /**
          * 可选属性 卡片引用 {string}
         */
        "rel"?: string;
        /**
          * 可选属性 可注入的CSS样式 {string}
         */
        "styles"?: string;
        /**
          * 可选属性 可链接卡片的目标 {string}
         */
        "target"?: string;
        /**
          * (optional) Link card
         */
        "to"?: string;
    }
    interface MyPage {
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-card": MyCard;
        "my-page": MyPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-page": LocalJSX.MyPage & JSXBase.HTMLAttributes<HTMLMyPageElement>;
        }
    }
}