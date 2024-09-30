import ScrollToTop from "./components/buttons/ScrollToTop";
import MainLayout from "./components/layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainLayout />
      <Toaster />
      <ScrollToTop />
    </>
  );
}

export default App;
