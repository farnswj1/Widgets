export interface Widget {
  name: string;
  path: string;
}

export interface WidgetCategory {
  name: string;
  widgets: Widget[];
}
