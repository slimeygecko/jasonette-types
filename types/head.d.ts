import {Actions} from './actions';
import {Agents} from './agents';
import {Styles} from './styles';
import {Templates} from './templates';
import {Data} from './data';

export interface Head {
    title: string;
    description?: string;
    icon?: string;
    offline?: boolean;
    styles?: Styles;
    actions?: Actions;
    templates?: Templates;
    data?: Data;
    agents?: Agents;
  }