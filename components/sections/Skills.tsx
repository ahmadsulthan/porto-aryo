import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-amber-400 uppercase tracking-widest">
            Expertise
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Skills & Capabilities
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
              "
            >
              <h3 className="text-2xl text-white mb-6">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/10
                      text-slate-300
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
