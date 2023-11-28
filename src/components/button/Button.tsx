import { ReactNode } from "react";

import styles from "./style.module.css";
import clsx from "clsx";

export type TypeArtButton =
  | "BluePurple"
  | "GreenYellow"
  | "Blue"
  | "YellowPink";

interface ArtButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: TypeArtButton;
}

export const Button: React.FC<ArtButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={clsx(
        styles.artButton,
        className,
        type && styles.artButtonType,
        type && styles[`artButton${type}`]
      )}
      onClick={onClick}
    >
      <span className={styles.artButtonText}>{children}</span>
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </button>
  );
};
