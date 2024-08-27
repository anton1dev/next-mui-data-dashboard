'use client'
import Dashboard from "@/app/dashboard/page";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import styles from './page.module.css';
import Login from "./components/Login";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <Header /> {
        session && (
          <><SideMenu /><Dashboard /></>
        )
      }
     <Login />
    </main >
  );
}
