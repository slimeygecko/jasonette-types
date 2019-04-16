import {Component} from './component'
import {Href} from './href';

export interface Layout {
    type: string;
    components?: Component[];
    href?: Href;
    style?: {
      padding?: number;
      spacing?: number;
      background?: string;
      z_index?: number;
      opacity?: number;
      align?: any;
      distribution?: any;
    }
  }