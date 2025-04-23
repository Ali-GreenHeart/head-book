import "@/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import WebRouting from "./routes";
import { ThemeProvider } from "@@/theme-provider";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!)
  .render(
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <StrictMode>
            <WebRouting />
          </StrictMode>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
