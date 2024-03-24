// Define a single object containing all color mappings
export const colorMappings = {
  land: {
    background: "bg-amber-100",
    fadedBackground: "bg-pale-brown",
    header: "bg-bright-brown",
    primaryText: "text-primary-brown",
    proseHeading: "prose-h3:text-primary-brown",
    underline: "border-b-primary-brown",
    selection: "selection:bg-pale-brown"
  },
  sea: {
    background: "bg-blue-100",
    fadedBackground: "bg-faded-blue",
    header: "bg-bright-blue",
    primaryText: "text-primary-blue",
    proseHeading: "prose-h3:text-primary-blue",
    underline: "border-b-primary-blue",
    selection: "selection:bg-faded-blue"
  },
  //TODO: Add air color mappings
  air: {
    background: "bg-teal-100",
    fadedBackground: "bg-teal-100/50",
    header: "bg-teal-800",
    primaryText: "text-teal-800",
    proseHeading: "prose-h3:text-teal-800",
    underline: "border-b-teal-800",
    selection: ""
  },
} as const;

// Function to get all colors for a given type (land, sea, air)
export const getThemeColors = <T extends keyof typeof colorMappings>(
  type: T = 'land' as T
 ): typeof colorMappings[T] => colorMappings[type];