const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(32),
};

const colors = {
  primary: "#6D55FF",
  secondary: "#E50123",
  success: "#00AC32",
  error: "#D70000",
  warning: "#FAAD14",
  informational: "#0085FF",
  gray_1: "#f5f5f5",
  gray_2: "#E0E0E0",
  gray_3: "#8e8e8e",
  gray_4: "#707070",
  white: "#ffffff",
  black: "#000000",
};

const deviceSizes = {
  mobilePortrait: "478px",
  mobileLandscape: "768px",
  tablet: "990px",
};

const devices = {
  mobilePortrait: `screen and (max-width: ${deviceSizes.mobilePortrait})`,
  mobileLandscape: `screen and (max-width: ${deviceSizes.mobileLandscape})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  colors,
  devices,
};

export default theme;
