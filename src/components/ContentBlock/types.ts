import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  /**
   * Renders the block title as the page <h1>. Exactly one block per page should
   * set it: the markup previously opened at <h6>, so the document had no first
   * level heading at all.
   */
  isPageHeading?: boolean;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
