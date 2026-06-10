export interface Product {
  id: string;           // Product ID from sheet e.g. P001
  name: string;
  category: string;
  discountedPrice: number;    // Sale / base price — always shown
  originalPrice?: number;     // If set and > discountedPrice, shown as strikethrough
  description: string;
  imageUrl: string;           // Converted Google Drive embed URL
  available: boolean;
  featured: boolean;
  makeTime?: string;          // e.g. "5 days", "1 week"
  orderFields?: string;       // e.g. "Color of thread, Size" — shown as placeholders in WA msg
}

export interface SheetRow {
  c: Array<{ v: string | number | boolean | null; f?: string } | null>;
}

export interface SheetData {
  table: {
    cols: Array<{ label: string; type: string }>;
    rows: SheetRow[];
  };
}
