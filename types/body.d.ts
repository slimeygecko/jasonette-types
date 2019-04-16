import {BodyHeader} from './bodyHeader';
import {Section} from './section';
import {Layer} from './layer';

export interface Body {
    header?: BodyHeader;
    sections?: Section[];
    layers?: Layer[];
}