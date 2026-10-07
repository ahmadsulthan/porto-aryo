import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#07111f]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-amber-400 uppercase tracking-widest">
            Career Journey
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Experience & Leadership
          </h2>
        </div>

        <div
          className="
            relative
            border-l
            border-amber-400/30
          "
        >
          {experiences.map((item) => (
            <div key={item.id} className="relative ml-10 mb-16">
              <div
                className="
                  absolute
                  -left-[49px]
                  top-2
                  w-4
                  h-4
                  rounded-full
                  bg-amber-400
                  shadow-lg
                  shadow-amber-400/40
                "
              />

              <span className="text-amber-400">{item.period}</span>

              <h3 className="text-2xl text-white mt-2">{item.title}</h3>

              <h4 className="text-slate-300 mt-1">{item.organization}</h4>

              <p className="text-slate-400 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
