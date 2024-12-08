import ScrollToTop from "./components/buttons/ScrollToTop";
import MainLayout from "./components/layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-zinc-50">
      <MainLayout />
      <Toaster />
      <ScrollToTop />
    </div>
  );
}

export default App;
