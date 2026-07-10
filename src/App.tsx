import { lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/common/Navbar'
import { Hero } from './components/sections/Hero'

const Services  = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })))
const Portfolio = lazy(() => import('./components/sections/Portfolio').then(m => ({ default: m.Portfolio })))
const About     = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })))
const Process   = lazy(() => import('./components/sections/Process').then(m => ({ default: m.Process })))
const Contact   = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })))
const Footer    = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })))

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Services />
            <Portfolio />
            <About />
            <Process />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      <Analytics />
    </>
  )
}

export default App
