export interface Href {
    url: string;
    options?: HrefOptions;
  }

export interface HrefOptions {
    [propName: string]: string;
}