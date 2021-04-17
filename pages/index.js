import Head from "next/head";
import { Toolbar } from "../components/ToolBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">

      <Toolbar/>
      <div className={styles.main}>
        <h1>Next.Js News App</h1>

        <h3>Your one stop shop for the latest news articles</h3>
      </div>
    </div>
  );
}
