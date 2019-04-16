import {Item} from './item';
import {TemplateItem} from './templateItem';

export interface Section {
    type?: string;
    header?: any;
    items: Item[] | TemplateItem;
  }
  