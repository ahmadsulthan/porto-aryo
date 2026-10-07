"use client";

import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-6xl font-bold text-amber-400">
              <CountUp end={6} duration={2} />+
            </h3>

            <p className="text-slate-400 mt-2">Research Projects</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-amber-400">
              <CountUp end={3} duration={2} />+
            </h3>

            <p className="text-slate-400 mt-2">Leadership Roles</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-amber-400">
              <CountUp end={1} duration={2} />
            </h3>

            <p className="text-slate-400 mt-2">Community Founded</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-amber-400">
              <CountUp end={1} duration={2} />
            </h3>

            <p className="text-slate-400 mt-2">Internship Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
