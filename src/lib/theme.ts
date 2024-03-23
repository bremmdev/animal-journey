export const themeColors = {
  land: {
    pale: "amber-100",
    header: "bright-brown",
    bright: "red-brown",
  },
  sea: {
    pale: "blue-100",
    header: "bright-blue",
    bright: "bright-blue",
  },
  air: {
    pale: "teal-100",
    header: "teal-800",
    bright: "teal-800",
  },
} as const;

export const brightThemeColors = {
  land: "text-red-brown",
  sea: "text-bright-blue",
  air: "text-teal-800",
} as const;

export const getThemeColors = (type: keyof typeof themeColors = "land") =>
  themeColors[type];
