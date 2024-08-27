import Dashboard from "@/app/dashboard/page";
import Header from "./components/Header";
import styles from './page.module.css'
import SideMenu from "./components/SideMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SideMenu />
      <Dashboard />
    </main >
  );
}
