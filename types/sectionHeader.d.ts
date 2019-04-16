import {Component} from './component';

export interface SectionHeader {
    type: string;
    components?: Component[];
    style: {
      color: string;
      height: string;
      z_index: number;
    }
  }