export const theme = {
  colors: {
    shadowcolor: "#aaaa",
    white: "#fff",
    headerBg2: "#1e6fd9",
    bg: "#d9d9d9",
    color: "#f2f2f2",
    blackBlue: "#033E8C"
  },
  transition:{
    transition: "1.2s"
  }
};

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};


// @media ${devices.xs} {
    
// }
// @media ${devices.sm} {
// }
// @media ${devices.md} {
// }
// @media ${devices.lg} {
  
// }
// @media ${devices.xl} {
  
// }