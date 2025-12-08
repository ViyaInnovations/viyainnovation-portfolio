import React from 'react'


export default function About() {
  return (

<>
    <section id="about" className="bg-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold">How we work</h3>
              <p className="mt-3 text-slate-700">We pair strategic thinking with rigorous execution. Typical engagement: discovery → strategy → design → build → launch → grow.</p>

              <ul className="mt-6 space-y-3 text-slate-600">
                <li>• Discovery workshops with stakeholders</li>
                <li>• Rapid design sprints & prototypes</li>
                <li>• Production-grade development & testing</li>
                <li>• Data-driven marketing & optimization</li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden bg-white p-6 shadow">
              <h4 className="font-semibold">Engagements are flexible</h4>
              <p className="mt-2 text-slate-600">From one-off campaigns to long-term partnerships — we adapt to your team's needs.</p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-slate-600">
                <div>
                  <div className="font-bold">Design</div>
                  <div className="mt-1">Branding • UI</div>
                </div>
                <div>
                  <div className="font-bold">Build</div>
                  <div className="mt-1">Web • Mobile • API</div>
                </div>
                <div>
                  <div className="font-bold">Grow</div>
                  <div className="mt-1">MKT • SEO • Ads</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>)
}
