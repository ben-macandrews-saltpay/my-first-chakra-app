/** ************************************************
 * Typography: Type scales.
 *
 * Tuple of (font family, text size, and line height).
 ************************************************* */

 export type TypeScale = {
    fontSize: string;
    fontStyle?: string;
    fontWeight: number;
    lineHeight: string;
  };
  
  export type TypeScales = {
    // new styles
    // the styles above need to be removed after removed it's declarations
    "heading-medium-semibold": TypeScale;
    "heading-small-semibold": TypeScale;
    "heading-small-regular": TypeScale;
    "body-regular": TypeScale;
    "body-semibold": TypeScale;
    "body-extrabold": TypeScale;
    "large-semibold": TypeScale;
    "small-regular": TypeScale;
    "small-semibold": TypeScale;
  };
  
  export const TYPE_SCALES: TypeScales = {
    // new styles
    // the styles above need to be removed after removed it's declarations
    "heading-medium-semibold": {
      fontStyle: "Normal",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "32px",
    },
    "heading-small-semibold": {
      fontStyle: "Normal",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "44px",
    },
    "heading-small-regular": {
      fontStyle: "Normal",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "32px",
    },
    "body-regular": {
      fontStyle: "Normal",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    "body-semibold": {
      fontStyle: "Normal",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    "body-extrabold": {
      fontStyle: "Normal",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    "large-semibold": {
      fontStyle: "Normal",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    },
  
    "small-regular": {
      fontStyle: "Normal",
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    "small-semibold": {
      fontStyle: "Normal",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "16px",
    },
  };
  
  export default TYPE_SCALES;