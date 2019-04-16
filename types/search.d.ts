import {Action} from './action';

export interface Search {
    name: string;
    placeholder: string;
    action: Action;
    style?: {
        background: string;
        color: string;
    }
}