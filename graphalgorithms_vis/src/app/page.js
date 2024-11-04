"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "./ui/components/MatrixComp/Matrix";
import PathFindingDFS from "./ui/algorithms/DFS/simplepathdfs";
import PathFindingBFS from "./ui/algorithms/BFS/simplepathbfs";
import GraphNodesComponent from "./ui/components/GraphNodesComp/GraphNodes";

export default function Home() {
  return (
    <div className={styles.page}>
        <GraphNodesComponent size={8} />
    </div>
  );
}
