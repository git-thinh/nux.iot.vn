// Import all interfaces
// Please don't import classes since they will be global and impact bundle size

declare global {
    interface Window {      
      _: any; // for lodash
      __app: any;
      __config: any;
      __coms_run: any;
      __run_names: any;
    }
}

export interface Payload {
  ok: boolean;
  status: number;
  message?: string;
  request?: any;
}
