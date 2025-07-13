"use client"
import PathFindingDFS from "../ui/algorithms/DFS/simplepathdfs";
import styles from "../page.module.css";

export default function DFS() {
    return (
      <div className={styles.page}>
          <PathFindingDFS size={8} />
      </div>
    );
  }