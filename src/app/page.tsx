import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import DocketCard from '@/components/DocketCard'
import AnimatedBackground from '@/components/AnimatedBackground'
import { getAllDockets } from '@/lib/docketUtils'

const HomePage = () => {
  const dockets = getAllDockets()

  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <section className="mx-auto max-w-8xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[2rem] border border-white/15 bg-white/90 p-10 shadow-glass backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">Vision of the Upcoming Year</p>
            <h2 className="mt-6 text-3xl font-semibold text-slate-950">A district that inspires every Leo</h2>
            <p className="mt-5 text-slate-600 leading-8">
              As District President, my vision for the upcoming year is to build a district that inspires every Leo to lead with purpose, serve with passion, and grow beyond limits. This year is about strengthening clubs, creating meaningful opportunities, and fostering a culture of collaboration, innovation, and excellence.
            </p>
            <p className="mt-5 text-slate-600 leading-8">
              Together, we aim to empower every Leo to create impact at the club, district, and international level while building a legacy of service and leadership.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/90 p-10 shadow-glass backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">Goals for the Year</p>
            <ul className="mt-4 space-y-3 text-slate-600 leading-8 list-disc list-inside">
              <li>Strengthen membership growth and retention across all clubs</li>
              <li>Encourage impactful and innovative service projects</li>
              <li>Build future leaders through training and mentorship</li>
              <li>Enhance inter-club collaboration and district unity</li>
              <li>Increase district recognition at multiple and international platforms</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/90 p-10 shadow-glass backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">About Leo District 3231 A2</p>
            <p className="mt-4 text-slate-600 leading-8">
              Leo District 3231 A2 is one of Mumbai’s leading youth service districts under Lions Clubs International, bringing together passionate young leaders committed to service, leadership, and growth. The district consists of multiple active Leo clubs and 700+ dynamic Leos working across Mumbai and surrounding regions.
            </p>
            <p className="mt-5 text-slate-600 leading-8">
              The district provides a platform for youth to develop leadership skills, build lifelong connections, and create meaningful community impact through service projects, fellowships, trainings, and collaborations. With a strong legacy of excellence, Leo District 3231 A2 continues to empower Leos to connect, unite, and grow while creating leaders for tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section id="docket-directory" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">Docket directory</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950">Explore all district dockets</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Each docket page uses a single reusable template and data-driven content architecture.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {dockets.map((docket) => (
            <DocketCard key={docket.slug} docket={docket} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
