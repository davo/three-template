interface CustomWindow extends Window {
  DEBUG?: boolean;
  webgl?: any;
}

declare let window: CustomWindow;
