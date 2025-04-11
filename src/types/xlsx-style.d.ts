declare module 'xlsx-style' {
    import * as XLSX from 'xlsx';
  
    export = XLSX;
  
    declare namespace XLSX {
      interface CellStyle {
        fill?: {
          fgColor?: { rgb: string };
          bgColor?: { rgb: string };
          patternType?: string;
        };
        font?: {
          name?: string;
          sz?: number;
          bold?: boolean;
          italic?: boolean;
          underline?: boolean;
          color?: { rgb: string };
        };
        border?: {
          top?: { style: string; color?: { rgb: string } };
          bottom?: { style: string; color?: { rgb: string } };
          left?: { style: string; color?: { rgb: string } };
          right?: { style: string; color?: { rgb: string } };
        };
        alignment?: {
          horizontal?: string;
          vertical?: string;
          wrapText?: boolean;
        };
      }
    }
  }
  