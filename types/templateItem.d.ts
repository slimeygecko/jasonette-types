import {Item} from './item';

export interface TemplateItem {
    operator: '#each' | '#if' | '#elseif'| '#else'
    name: string
    object: Item
}