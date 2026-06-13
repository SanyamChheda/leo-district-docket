import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionNavigation from '@/components/SectionNavigation'
import ContentSection from '@/components/ContentSection'
import TeamCard from '@/components/TeamCard'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { getDocketBySlug, getAllDockets } from '@/lib/docketUtils'
import type { Metadata } from 'next'

interface DocketPageProps {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return getAllDockets().map((docket) => ({ slug: docket.slug }))
}

export const generateMetadata = ({ params }: DocketPageProps): Metadata => {
  const docket = getDocketBySlug(params.slug)

  if (!docket) {
    return {
      title: 'Docket not found'
    }
  }

  return {
    title: `${docket.title} | Leo District 3231 A2`,
    description: `Explore the ${docket.title} docket in the Leo District 3231 A2 Schooling Portal.`
  }
}

const DocketPage = ({ params }: DocketPageProps) => {
  const docket = getDocketBySlug(params.slug)

  if (!docket) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">
        <Navbar />
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white p-10 text-center shadow-glass">
          <h1 className="text-3xl font-semibold text-slate-950">Docket not found</h1>
          <p className="mt-4 text-slate-600">The docket you are looking for does not exist or has not been added yet.</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-slate-50">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-r from-deepPurple via-royalPurple to-pinkAccent px-6 py-16 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-goldAccent">{docket.title}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{docket.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{docket.introduction}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        <div className="mb-10 lg:mb-0">
          <SectionNavigation sections={docket.sections} />
        </div>

        <div className="space-y-10">
          <div className="space-y-8">
            {docket.sections.length > 0 ? (
              docket.sections.map((section) => <ContentSection key={section.id} section={section} />)
            ) : (
              <div className="rounded-[2rem] border border-white/15 bg-white p-10 text-slate-600 shadow-glass">
                <p className="text-lg font-semibold text-slate-950">Section content available soon</p>
                <p className="mt-4">Add sections to the docket data file and they will appear automatically here.</p>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white p-10 shadow-glass">
            <p className="text-sm uppercase tracking-[0.35em] text-pinkAccent">Meet the District Team</p>
            <p className="mt-3 text-xl font-semibold text-slate-950">Team members within this docket</p>
            {docket.teamMembers.length > 0 ? (
            <>
              {(() => {
                const specialChairDockets = ['get', 'gst', 'gmt', 'glt']

                let primaryMembers = []
                let jointAndCoordinators = []
                let otherMembers = []

                if (specialChairDockets.includes(docket.slug)) {
                  primaryMembers = docket.teamMembers.filter((member) => {
                    const pos = member.districtPosition.toLowerCase()
                    return pos.includes('chair') || pos.includes('chairperson')
                  })

                  jointAndCoordinators = docket.teamMembers.filter((member) => {
                    const pos = member.districtPosition.toLowerCase()
                    return pos.includes('joint') || pos.includes('co-ordinator') || pos.includes('coordinator')
                  })

                  otherMembers = docket.teamMembers.filter(
                    (member) => !primaryMembers.includes(member) && !jointAndCoordinators.includes(member)
                  )
                } else {
                  primaryMembers = docket.teamMembers.filter((member) => {
                    const pos = member.districtPosition.toLowerCase()
                    const isPrimary = ['chief marketing officer', 'district secretary', 'district treasurer', 'treasurer', 'president', 'vice president'].some((label) =>
                      pos.includes(label)
                    ) || (pos.includes(' cmo') && !pos.includes('joint'))
                    const isJoint = pos.includes('joint')
                    return isPrimary && !isJoint
                  })

                  jointAndCoordinators = docket.teamMembers.filter((member) => {
                    const pos = member.districtPosition.toLowerCase()
                    return pos.includes('joint') || pos.includes('co-ordinator') || pos.includes('coordinator')
                  })

                  otherMembers = docket.teamMembers.filter(
                    (member) => !primaryMembers.includes(member) && !jointAndCoordinators.includes(member)
                  )
                }

                return (
                  <>
                    {primaryMembers.length > 0 && (
                      <div className="mt-8 grid justify-items-center">
                        {primaryMembers.map((member) => (
                          <div key={member.name} className="w-full max-w-xs">
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}

                    {jointAndCoordinators.length > 0 && (
                      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                        {jointAndCoordinators.map((member) => (
                          <div key={member.name} className="w-full max-w-sm">
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}

                    {otherMembers.length > 0 && (
                      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                        {otherMembers.map((member) => (
                          <div key={member.name} className="w-full max-w-sm">
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )
              })()}
            </>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-slate-500">
              <p className="font-semibold">Team profiles coming soon</p>
              <p className="mt-3">Add team member data to the docket file to populate the district team section.</p>
            </div>
          )}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default DocketPage
