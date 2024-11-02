import Image from "next/image";
import styles from "./page.module.css";
import Matrix from "./ui/MatrixComp/Matrix";
import PathFindingDFS from "./ui/DFS/simplepathdfs";

export default function Home() {
  return (
    <div className={styles.page}>
        <PathFindingDFS size={8}/>
    </div>
  );
}
