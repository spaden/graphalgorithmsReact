"use client"
import PathFindingBFS from "../ui/algorithms/BFS/simplepathbfs";
import styles from "../page.module.css";

export default function DFS() {
    return (
      <div className={styles.page}>
          <PathFindingBFS size={8} />
      </div>
    );
  }