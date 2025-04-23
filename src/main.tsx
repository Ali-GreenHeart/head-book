import "@/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!)
  .render(
    <BrowserRouter>
      <StrictMode>

      </StrictMode>
    </BrowserRouter>
  )
