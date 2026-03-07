import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
// import SmoothScroll from './components/SmoothScroll.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <SmoothScroll> */}
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
    {/* </SmoothScroll> */}
  </StrictMode>,
)
