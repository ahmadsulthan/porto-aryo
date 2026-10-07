export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-slate-950
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold">
              Aryo Anargya Hakim Putra
            </h3>

            <p className="text-slate-400 mt-2">
              Research, Education, and Community Development.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="mailto:aryo@example.com">Email</a>

            <a href="https://wa.me/6281234567890">WhatsApp</a>

            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-slate-500 text-sm">
            © 2026 Aryo Anargya Hakim Putra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
