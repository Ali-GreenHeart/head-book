import "@/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import WebRouting from "./routes";
import { ThemeProvider } from "@@/theme-provider";

createRoot(document.getElementById('root')!)
  .render(
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StrictMode>
          <WebRouting />
        </StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  )
