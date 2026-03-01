import { Download, Mail, MessageCircle, MessageSquare, Globe, ChefHat, Award, Send } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900" style={{backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.92), rgba(17, 24, 39, 0.92)), url('/bakery-working.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-amber-500/20 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end gap-4 mb-12">
            <a
              href="/DOSSIER_BEWERB.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 font-medium"
            >
              <Download size={18} />
              Lebenslauf herunterladen
            </a>
            <a
              href="https://wa.me/212622955665"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-6 py-2 rounded-lg transition-all duration-300 backdrop-blur font-medium"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="mailto:elhanafereda@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-6 py-2 rounded-lg transition-all duration-300 backdrop-blur font-medium"
            >
              <Mail size={18} />
              E-Mail
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">REDA EL HANAFE</h1>
              <p className="text-2xl text-gray-300">Angehender Konditor</p>
            </div>
            <div className="w-80 bg-gray-800/60 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:shadow-amber-500/20 flex items-center justify-center">
              <img
                src="/PROFIL.GPJ.jpeg"
                alt="Profil"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Über mich</h2>
          <div className="border-l-4 border-amber-500 pl-8 bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <p className="text-gray-100 leading-relaxed text-lg">
              Als hochmotivierter angehender Konditor verfüge ich über fundierte praktische Erfahrungen in der französischen und internationalen Patisserie. Mein primäres Ziel ist die Absolvierung einer qualifizierten Ausbildung im Bereich Konditorei in Deutschland sowie die langfristige Etablierung einer erfolgreichen Karriere in der deutschen Backkunst, um einen wertvollen Beitrag in einem Patisserie-Team zu leisten.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Berufserfahrung</h2>
          <div className="border-l-4 border-amber-500 pl-8 bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <p className="text-gray-100 leading-relaxed text-lg">
              Intensivpraktikum in der Konditorei 'Süße Träume' (Fès, Marokko): Herstellung und Dekoration französischer Feinbackwaren wie Éclairs, Tartes und Croissants. Zubereitung von Cremefüllungen (Patissierecreme, Ganache) und verschiedenen Teigarten (Mürbeteig, Blätterteig). Zudem Mitwirkung bei herzhaftem Gebäck und Kundenkommunikation für Sonderbestellungen.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Qualifikationen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg border border-amber-500/20 hover:border-amber-500 hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={48} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400 text-center">Deutsch B1 (Telc)</h3>
              <p className="text-gray-300 leading-relaxed">
                Nachgewiesene Sprachkompetenz auf B1-Niveau, inklusive bestandener mündlicher Prüfung, für die professionelle Kommunikation in der Küche und mit Kunden.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg border border-amber-500/20 hover:border-amber-500 hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={48} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400 text-center">Spezialisierte Berufsausbildung Patisserie</h3>
              <p className="text-gray-300 leading-relaxed">
                Laufendes Zertifikatsprogramm (seit 03/2026) in Patisserie, Konditorei und französischen & internationalen Feinbackwaren vom Studien- und Berufsbildungszentrum, Fès.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg border border-amber-500/20 hover:border-amber-500 hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe size={48} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-400 text-center">Sprachkenntnisse</h3>
              <p className="text-gray-300 leading-relaxed">
                Arabisch (Muttersprache), Französisch (gute Kenntnisse), Englisch (Grundkenntnisse).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Bewerbungsstrategie</h2>
          <div className="border-l-4 border-amber-500 pl-8 bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <p className="text-gray-100 leading-relaxed text-lg">
              Diese Webpräsenz stellt meine innovative digitale Bewerbung dar. Sie ermöglicht potenziellen Arbeitgebern einen transparenten und umfassenden Überblick über meine fachliche Motivation sowie meine erworbenen Qualifikationen durch moderne Präsentationsformen.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Audio-Vorstellung</h2>
          <div className="border-l-4 border-amber-500 pl-8 bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <div className="mb-6">
              <audio controls className="w-full accent-amber-500">
                <source src="" type="audio/mpeg" />
                Ihr Browser unterstützt das Audio-Element nicht.
              </audio>
            </div>
            <p className="text-gray-100 leading-relaxed">
              Guten Tag. Mit der Inanspruchnahme dieser digitalen Plattform möchte ich Ihnen nicht nur meine fachlichen Qualifikationen als angehender Konditor präsentieren, sondern auch meine strebende Absicht zur kontinuierlichen Verbesserung meiner Deutschkenntnisse unter Beweis stellen.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Dokumente & Downloads</h2>
          <div className="border-l-4 border-amber-500 pl-8 bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <div className="space-y-4">
              {[
                'Lebenslauf',
                'Anschreiben',
                'Telc B1 Zertifikat',
                'Spezialisierte Berufsausbildung (Zertifikat)',
                'Intensivpraktikum Bescheinigung',
                'Abitur Zeugnis'
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-0 hover:bg-gray-700/30 px-4 rounded transition-colors">
                  <span className="text-gray-100 text-lg">{doc}</span>
                  <a
                    href="/DOSSIER_BEWERB.pdf"
                    download
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Kontaktieren Sie mich</h2>
          <div className="bg-gray-800/60 backdrop-blur p-8 rounded-xl shadow-lg border border-amber-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-amber-400 mb-2 font-medium">Ihr Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-amber-500/30 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100 placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-amber-400 mb-2 font-medium">Ihre E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-amber-500/30 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100 placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-amber-400 mb-2 font-medium">Ihre Nachricht</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-amber-500/30 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100 placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:shadow-lg hover:shadow-amber-500/50"
                  >
                    <Send size={20} />
                    Nachricht senden
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Kontaktinformationen</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <Mail className="text-amber-400" size={24} />
                      <a href="mailto:elhanafereda@gmail.com" className="text-gray-100 hover:text-amber-400 transition-colors">
                        elhanafereda@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                      <MessageCircle className="text-amber-400" size={24} />
                      <a href="https://wa.me/212622955665" className="text-gray-100 hover:text-amber-400 transition-colors">
                        +212 622955665
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="/DOSSIER_BEWERB.pdf"
                    download
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg w-full hover:shadow-lg hover:shadow-amber-500/50"
                  >
                    <Download size={24} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-amber-500/20 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 Reda El Hanafe - Angehender Konditor</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
