import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
