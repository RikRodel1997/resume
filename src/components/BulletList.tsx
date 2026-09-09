import type { CSSProperties, ReactNode } from "react";

const styles: Record<string, CSSProperties> = {
  list: {
    margin: 0,
    marginBottom: 2,
    paddingLeft: 14,
  },
  listItem: {
    fontSize: 8,
    lineHeight: 1.5,
  },
};

interface BulletListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
}

export const BulletList = <T,>({ items, renderItem, keyExtractor }: BulletListProps<T>) => (
  <ul style={styles.list}>
    {items.map((item, index) => (
      <li key={keyExtractor(item, index)} style={styles.listItem}>
        {renderItem(item, index)}
      </li>
    ))}
  </ul>
);
