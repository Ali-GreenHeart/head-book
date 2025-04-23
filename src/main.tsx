import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/index.css";

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <p className='text-3xl bg-red-400'>salam</p>
    </StrictMode>,
  )
