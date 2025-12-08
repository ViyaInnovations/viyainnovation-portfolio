import React from 'react'

export default function Footer() {
  return (
<>

    <footer className="border-t bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-emerald-400 flex items-center justify-center text-white font-bold">VI</div>
              <div>
                <div className="font-semibold">ViyaInnovations</div>
                <div className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved</div>
              </div>
            </div>

            <div className="text-sm text-slate-600">Built for international clients • Terms • Privacy</div>
          </div>
        </footer>
</>  )
}
