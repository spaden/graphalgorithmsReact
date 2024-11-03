import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "./ui/MatrixComp/Matrix";
import PathFindingDFS from "./ui/DFS/simplepathdfs";
import PathFindingBFS from "./ui/BFS/simplepathbfs";

export default function Home() {
  return (
    <div className={styles.page}>
        <PathFindingBFS size={8}/>
    </div>
  );
}
