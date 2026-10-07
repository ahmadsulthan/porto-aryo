import Container from "../ui/Container";

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-amber-400 uppercase tracking-widest">
              About
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              Researching society, education, and community development.
            </h2>
          </div>

          <div>
            <p className="text-slate-300 leading-8 text-lg">
              Aryo Anargya Hakim Putra is a Sociology Education graduate from
              the State University of Jakarta with interests in social research,
              educational development, youth empowerment, and community
              engagement.
            </p>

            <p className="text-slate-400 mt-6 leading-8">
              His academic work explores organizational culture, youth behavior,
              masculinity, community development, and public social interactions
              through sociological theories and qualitative research approaches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
