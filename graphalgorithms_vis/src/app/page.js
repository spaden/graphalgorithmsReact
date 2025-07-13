"use client"
import styles from "./page.module.css";
import GraphNodesComponent from "./ui/components/GraphNodesComp/GraphNodes";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
        <GraphNodesComponent size={8} />

        <div className={styles.divLink}><a className={styles.link} href="/BFS">Go to BFS</a><a className={styles.link} href="/DFS">Go to DFS</a></div>
        
    </div>
  );
}
