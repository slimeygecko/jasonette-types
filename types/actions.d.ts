export interface BaseAction {
    // type: string
    // options?: object
    success?: Actions
    error?: Actions
  }


export interface Actions {
    AudioPlay?: _Actions.Audio.Play
    AudioPause?: _Actions.Audio.Pause 
    AudioStop?: _Actions.Audio.Stop 
    AduioSeek?: _Actions.Audio.Seek
    AudioPosition?: _Actions.Audio.Position 
    AudioDuration?: _Actions.Audio.Duration 
    AudioRecord?: _Actions.Audio.Record
    NetworkRequest?: _Actions.Network.Request
    NetworkUpload?: _Actions.Network.Upload
}

declare namespace _Actions {
    export namespace Audio {
        export interface Play extends BaseAction {
            url: string
            title: string
            author: string
            album: string
            image: string
        }
        export interface Pause extends BaseAction {
            url?: string
        }
        export interface Stop extends BaseAction {
            url?: string
        }
        export interface Seek extends BaseAction {
            url: string
            position: string
        }
        export interface Position extends BaseAction {
            url: string
        }
        export interface Duration extends BaseAction {
            url: string
        }
        export interface Record extends BaseAction {
            color: string
            colorDisabled: string
            theme?: "light"
        }
    }
    export type Back = BaseAction
    export namespace Cache {
        export type Read = BaseAction
        export type Reset = BaseAction
        export type Write = BaseAction
    }
    export type Close = BaseAction
    export namespace Convert {
        export type CSV = {
            data: string
        }
        export type RSS = {
            data: string
        }
    }
    export type Foreground = BaseAction
    export namespace Geo {
        export interface Get extends BaseAction {
            distance: number
        }
    }
    export type Href = BaseAction
    export type Lambda = BaseAction
    export type Load = BaseAction
    export namespace Media {
        export type Camera = BaseAction
        export type Picker = BaseAction
        export type Play = BaseAction
    }
    export namespace Network {
        export interface Request extends BaseAction {
            url: string
            method: "get" | "post" | "put" | "delete" | "head" | "patch"
            data?: any
            header?: string
            timeout?: number
            data_type?: 'json' | 'html' | 'rss' | 'raw'
            content_type?: string
        }
        export type Upload = BaseAction
    }
    export type Ok = BaseAction
    export type Pull = BaseAction
    export type Reload = BaseAction
    export interface Render extends BaseAction {
        data?: any
        template?: string
        type?: "html" | "json"
    }
    export type Require = BaseAction
    export namespace Return {
        export type Error = BaseAction
        export type Success = BaseAction
    }
    export namespace Script {
        export type Clear = BaseAction
        export type Include = BaseAction
    }
    export type Scroll = BaseAction
    export namespace Session {
        export type Set = BaseAction
        export interface Reset extends BaseAction {
            url: string
            domain: string
            data: {

            }
            type: "href" | "json"
        }
    }
    export type Show = BaseAction
    export type Snapshot = BaseAction
    export namespace Timer {
        export interface Start extends BaseAction {
            interval: number
            name: string
            repeats?: "true"
            action: BaseAction
        }
        export interface Stop extends BaseAction {
            name: string
        }
    }
    export namespace Util {
        export type AddressBook = BaseAction
        export type Alert = BaseAction
        export type Banner = BaseAction
        export type DatePicker = BaseAction
        export type Picker = BaseAction
        export type Share = BaseAction
        export type Toast = BaseAction
    }
    export namespace Variable {
        export interface Set extends BaseAction {
            [propName: string]: any
        }
        // export type Get = BaseAction
    }
    export namespace Vision {
        export interface OnScan extends BaseAction {
            type: string
            title: string
            description: string
        }
    }
}