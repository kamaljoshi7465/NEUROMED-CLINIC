// src/styles/theme.ts

// 🎨 Colors
export const colors = {
  primary: "#1976d2",   // main blue
  primaryDark: "#115293",
  primaryLight: "#4791db",

  secondary: "#9c27b0", // purple
  secondaryDark: "#6d1b7b",
  secondaryLight: "#ba68c8",

  success: "#2e7d32",   // green
  warning: "#ed6c02",   // orange
  error: "#d32f2f",     // red
  info: "#0288d1",      // light blue

  background: {
    default: "#f9fafb",  // light gray background
    paper: "#ffffff",    // card, modals
    dark: "#121212",     // dark mode background
  },

  text: {
    primary: "#212121",
    secondary: "#757575",
    disabled: "#bdbdbd",
    light: "#ffffff",
  },
};

// ✍️ Typography
export const typography = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

  h1: { fontSize: "2.5rem", fontWeight: 700 },
  h2: { fontSize: "2rem", fontWeight: 600 },
  h3: { fontSize: "1.75rem", fontWeight: 600 },
  h4: { fontSize: "1.5rem", fontWeight: 500 },
  h5: { fontSize: "1.25rem", fontWeight: 500 },
  h6: { fontSize: "1rem", fontWeight: 500 },

  body1: { fontSize: "1rem", fontWeight: 400 },
  body2: { fontSize: "0.875rem", fontWeight: 400 },
  button: { fontSize: "0.875rem", fontWeight: 600, textTransform: "none" },
};

// 📏 Spacing
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

// 🌑 Shadows
export const shadows = {
  none: "none",
  sm: "0px 1px 3px rgba(0,0,0,0.12)",
  md: "0px 3px 6px rgba(0,0,0,0.16)",
  lg: "0px 6px 12px rgba(0,0,0,0.2)",
  xl: "0px 12px 24px rgba(0,0,0,0.25)",
};

// 🔲 Border Radius
export const radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
};

// 📱 Breakpoints (responsive design)
export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};
