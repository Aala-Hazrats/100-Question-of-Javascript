import IndexProvider from "@/providers/index-provider";
import AppRoutes from "@/routes/index.routes";

const App = () => {
  return (
    <IndexProvider>
      <AppRoutes />
    </IndexProvider>
  );
};

export default App;
