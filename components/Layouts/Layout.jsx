import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="bg-slate-50 min-h-screen overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
