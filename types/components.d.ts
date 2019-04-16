import { Action } from './action';

// export type Component =
//   Components.Button
//   | Components.Image
//   | Components.Label
//   | Components.Slider
//   | Components.Switch
//   | Components.Textarea
//   | Components.Textfield;

export namespace Components {
  export interface Label {
    type: string;
    text: string;
    style?: {
      font?: string;
      size?: string;
      color?: string;
      padding?: string;
      background?: string;
      corner_radius?: string;
    }
  }

  export interface Image {
    type: string;
    url: string;
    header?: any;
    style?: {
      corner_radius?: string;
      width?: string;
      height?: string;
      color?: string;
    }
  }

  export interface Button {
    type: string;
    text?: string;
    url?: string;
    header?: any;
    action: Action;
    style?: {
      width?: string;
      height?: string;
      color?: string;
      background?: string;
      border_width?: string;
      border_color?: string;
      corner_radius?: string;
      padding?: string;
      align?: string;
    }
  }

  export interface Textfield {
    name: string;
    value?: string;
    placeholder?: string;
    keyboard?: string;
    focus?: boolean;
    style?: {
      background?: string;
      align?: string;
      autocorrect?: boolean;
      autocapitalize?: boolean;
      spellcheck?: boolean;
      size?: number;
      font?: string;
      color?: string;
      placeholder_color?: string;
      secure?: boolean;
    }
  }

  export interface Textarea {
    name: string;
    value?: string;
    placeholder?: string;
    keyboard?: string;
    focus?: boolean;
    style?: {
      background?: string;
      align?: string;
      autocorrect?: boolean;
      autocapitalize?: boolean;
      spellcheck?: boolean;
      size?: number;
      font?: string;
      color?: string;
      placeholder_color?: string;
    }
  }

  export interface Slider {
    name: string;
    value: number;
    action: Action;
    style?: {
      width?: string;
      height?: string;
      color?: string;
    }
  }

  export interface Switch {
    name: string;
    value: number;
    action: Action;
    style?: {
      color?: string;
    }
  }
}