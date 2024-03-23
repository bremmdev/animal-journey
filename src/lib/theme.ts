export const backgroundColors = {
  land: "bg-amber-100",
  sea: "bg-blue-100",
  air: "bg-teal-100",
} as const;

export const primaryTextColor = {
  land: "text-red-brown",
  sea: "text-bright-blue",
  air: "text-teal-800",
} as const;

export const headerColors = {
  land: "text-bright-brown",
  sea: "text-bright-blue",
  air: "text-teal-800",
} as const;

export const proseHeadings = {
  land: "prose-h3:text-red-brown",
  sea: "prose-h3:text-bright-blue",
  air: "prose-h3:text-teal-800",
} as const;

export const underlines = {
  land: "border-b-red-brown",
  sea: "border-b-bright-blue",
  air: "border-b-teal-800",
} as const;

export const getBackgroundColor = (type: keyof typeof backgroundColors = "land") => backgroundColors[type];
export const getPrimaryTextColor = (type: keyof typeof primaryTextColor = "land") => primaryTextColor[type];
export const getHeaderColor = (type: keyof typeof headerColors = "land") => headerColors[type];
export const getProseHeadingColor = (type: keyof typeof proseHeadings = "land") => proseHeadings[type];
export const getUnderlineColor = (type: keyof typeof underlines = "land") => underlines[type];
