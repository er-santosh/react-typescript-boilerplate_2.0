import { AppProvider } from "@providers/app";
import { AppRoutes } from "@routes/AppRoutes";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
