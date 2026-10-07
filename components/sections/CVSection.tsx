export default function CVSection() {
  return (
    <section id="cv" className="py-32 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-amber-400 uppercase tracking-widest">
          Curriculum Vitae
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          Professional Profile
        </h2>

        <p className="text-slate-400 mt-6">
          Download the complete curriculum vitae containing academic background,
          research projects, leadership experience, and professional activities.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="/cv/aryo-cv.pdf"
            target="_blank"
            className="
              px-6 py-3
              bg-amber-400
              text-black
              rounded-xl
              font-medium
            "
          >
            View CV
          </a>

          <a
            href="/cv/aryo-cv.pdf"
            download
            className="
              px-6 py-3
              border
              border-white/10
              rounded-xl
              text-white
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
