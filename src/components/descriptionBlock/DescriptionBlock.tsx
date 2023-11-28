import React from "react";
import styles from "./style.module.css"
interface DescriptionBlockProps {
  children: React.ReactNode;
}
export default function DescriptionBlock({ children }: DescriptionBlockProps) {
  return <div className={styles.description__block}>{children}</div>;
}
