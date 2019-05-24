const palette = {
  purple: {
    900: `#362066`,
    800: `#452475`,
    700: `#542C85`,
    600: `#663399`,
    500: `#8a4baf`,
    400: `#B17ACC`,
    300: `#D9BAE8`,
    200: `#F1DEFA`,
    100: `#F6EDFA`,
    50: `#FCFAFF`,
  },
  orange: {
    900: `#db3a00`,
    800: `#e65800`,
    700: `#F67300`,
    600: `#FB8400`,
    500: `#FFB238`,
    400: `#FFD280`,
    300: `#FFE4A1`,
    200: `#FFEDBF`,
    100: `#FFF4DB`,
    50: `#FFFCF7`,
  },
  yellow: {
    900: `#8A6534`,
    800: `#BF9141`,
    700: `#E3A617`,
    600: `#FEC21E`,
    500: `#FED038`,
    400: `#FFDF37`,
    300: `#FFEB99`,
    200: `#FFF2A8`,
    100: `#FFF5BF`,
    50: `#FFFDF7`,
  },
  red: {
    900: `#B80000`,
    800: `#CE0009`,
    700: `#DA0013`,
    600: `#EC1818`,
    500: `#FA2915`,
    400: `#FF5A54`,
    300: `#FF8885`,
    200: `#FFBAB8`,
    100: `#FDE7E7`,
    50: `#FFFAFA`,
  },
  magenta: {
    900: `#690147`,
    800: `#7D0E59`,
    700: `#940159`,
    600: `#A6026A`,
    500: `#BC027F`,
    400: `#D459AB`,
    300: `#E899CE`,
    200: `#F2C4E3`,
    100: `#FFE6F6`,
    50: `#FFFAFD`,
  },
  blue: {
    900: `#004CA3`,
    800: `#006AC1`,
    700: `#047BD3`,
    600: `#0E8DE6`,
    500: `#0d96f2`,
    400: `#3FA9F5`,
    300: `#63B8F6`,
    200: `#90CDF9`,
    100: `#DBF0FF`,
    50: `#F5FCFF`,
  },
  teal: {
    900: `#008577`,
    800: `#10A39E`,
    700: `#00BDB6`,
    600: `#2DE3DA`,
    500: `#05F7F4`,
    400: `#73FFF7`,
    300: `#A6FFFA`,
    200: `#CCFFFC`,
    100: `#DCFFFD`,
    50: `#F7FFFF`,
  },
  green: {
    900: `#006500`,
    800: `#088413`,
    700: `#1D9520`,
    600: `#2CA72C`,
    500: `#37B635`,
    400: `#59C156`,
    300: `#79CD75`,
    200: `#A1DA9E`,
    100: `#DEF5DC`,
    50: `#F7FDF7`,
  },
  grey: {
    900: `#232129`,
    800: `#36313D`,
    700: `#48434F`,
    600: `#635E69`,
    500: `#78757A`,
    400: `#B7B5BD`,
    300: `#D9D7E0`,
    200: `#F0F0F2`,
    100: `#F5F5F5`,
    50: `#FBFBFB`,
  },
  white: `#ffffff`,
  black: `#000000`,
}

export default {
  ...palette,
  gatsby: palette.purple[600],
  // legacy shortcuts
  // most of these should be refactored to role-based tokens as we flesh those out
  lilac: palette.purple[500],
  lavender: palette.purple[200],
  accent: palette.orange[500],
  warning: palette.red[700],
  // role-based tokens
  ui: {
    background: palette.grey[50],
    hover: palette.purple[50],
    border: {
      subtle: palette.grey[200],
    },
  },
  link: {
    color: palette.purple[500],
    border: palette.purple[300],
    hoverBorder: palette.purple[500],
  },
  text: {
    header: palette.black,
    primary: palette.grey[800],
    secondary: palette.grey[500],
    placeholder: palette.grey[400],
  },
  input: {
    border: palette.grey[300],
    focusBorder: palette.orange[400],
    focusBoxShadow: palette.orange[200],
  },
  code: {
    bgInline: `#fbf2e9`,
    bg: `#fdfaf6`,
    border: `#faede5`,
    text: `#866c5b`,
    remove: `#e45c5c`,
    add: `#4a9c59`,
    selector: `#b3568b`,
    tag: `#4084a1`,
    keyword: `#538eb6`,
    comment: `#6f8f39`,
    punctuation: `#53450e`,
    regex: `#d88489`,
    cssString: `#a2466c`,
    invisibles: `#e0d7d1`,
    scrollbarThumb: `#f4d1c6`,
    lineHighlightBorder: `#f1beb6`,
  },
}
