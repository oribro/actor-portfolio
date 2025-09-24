import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function ActorPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "עליי", href: "#about" },
    { label: "שואוריל", href: "#showreel" },
    { label: "תפקידים", href: "#credits" },
    { label: "צור קשר", href: "#contact" },
  ];

  return (
    <div dir="rtl" className="font-sans bg-gray-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-900 text-white fixed top-0 right-0 left-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
      {/* Hero */}
      <section className="bg-gray-900 text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          אלון דה פריז
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl"
        >
          שחקן, יוצר ומאלתר
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">שלום וברכה 🎗️</h2>
        <p className="text-lg leading-relaxed">
          אני אלון דה פריז,
          <span className="font-bold">
            {" "}
            שחקן, מאלתר, מנחה לאלתור ונגן.{" "}
          </span>{" "}
          אני אוהב לצחוק, לנסות להביא אמת, לאכול מנגו בשל עם הקליפה מעל הכיור
          באימפולסיביות ותשוקה באופן שמצריך סליל שלם של חוט דנטלי לאחר מכן כדי
          להתאושש ועוד.
          <ul className="list-none p-0 m-0 text-lg leading-relaxed">
            <li>
              ⭐<span className="font-bold">פרס השחקן הטוב ביותר</span>- DEA
              Film festival, Tirana, Albania 2023 על תפקידי בסרט “Touch Me”
              (יוצר: בוריס קאז׳דאן).
            </li>
            <li>
              ⭐<span className="font-bold">ציון לשבח-</span> פסטיבל עכו 2023,
              על משחק ביצירה ״המשחק״ (שותף יוצר עם אסף שוורצמן)
            </li>
            <li>
              ⭐<span className="font-bold"> פרס השחקן הטוב ביותר </span>-
              פסטיבל הביכורים, 2022, על תפקידי בהצגה ״טובת המערכת״ (יוצר: ראם
              אהרוני){" "}
            </li>
          </ul>
          🤓חוטא ב<span className="font-bold">כתיבה</span>: בתחילת 2025 אחת
          היצירות המקוריות שכתבתי ושיחקתי יחד עם שותפתי אור קרני, עלתה בפסטיבל
          הסרטים בחיפה וזו רק ההתחלה ;)
        </p>
        <br />
        <div className="text-center text-gray-400 text-3xl my-8">***</div>
        <p className="text-lg leading-relaxed">
          כששואלים אותי איך הגעתי למסקנה שאני רוצה להיות שחקן אני מספר שכל השנים
          על הבמה מאחורי התופים הרגשתי בבית. היה לי נעים ונוח. מופיע, אבל מסתתר.
          מתבטא, אבל דרך התוף. יצא שבתיכון היה לי חיקוי לא רע לצביקה המנהל שלנו,
          וכשכתבנו את מופע הסיום התברר שצביקי יהיה דמות מרכזית שתניע את העלילה.
          מן הון להון נבחרתי <span className="font-bold">לשחק </span>במופע, ולא
          לנגן על התופים, ועוד את התפקיד הראשי. אני לא זוכר הרבה מאותו ערב, חוץ
          מהתחושה הזו של חשמל. כל מצמוץ, כל תזוזה קטנה בזווית הפה- והקהל מגיב.
          משהו מעניין קרה שם. ברגע שעמדתי שם על הבמה לראשונה כשחקן ולא כנגן
          ידעתי- "הכלי הבא שאלמד לנגן עליו הוא אני". והשאר היסטוריה.
        </p>
        <p className="text-lg leading-relaxed">
          אם הגעתם עד לכאן- הנה סרטון חביב מלפני עשור בשביל הנשמה ולמען תעמיק
          ההיכרות בינינו :)
        </p>
        <video
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
          src="https://youtube.com/shorts/whO3ZaSV2Rk"
          controls
        />
      </section>

      {/* Showreel */}
      <section id="showreel" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">שואוריל</h2>
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Showreel"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/* Credits */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">תפקידים נבחרים</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li className="bg-white shadow-md rounded-xl p-6">
            <strong>המלט</strong> — שייקספיר — תיאטרון הבימה
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            <strong>החייל האמיץ שווייק</strong> — תיאטרון הקאמרי
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            <strong>פאוסט</strong> — גתה — תיאטרון חיפה
          </li>
          <li className="bg-white shadow-md rounded-xl p-6">
            <strong>הנסיך הקטן</strong> — עיבוד מקורי לילדים
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">צור קשר</h2>
        <p className="mb-6">להופעות, שיתופי פעולה או יצירת קשר</p>
        <form
          className="max-w-md mx-auto space-y-4 text-right"
          onSubmit={(e) => {
            e.preventDefault();
            alert("טופס נשלח! החלף עם handler אמיתי.");
          }}
        >
          <input
            type="text"
            placeholder="שם מלא"
            className="w-full p-3 rounded-lg text-gray-900"
            required
          />
          <input
            type="email"
            placeholder="אימייל"
            className="w-full p-3 rounded-lg text-gray-900"
            required
          />
          <textarea
            placeholder="הודעה"
            className="w-full p-3 rounded-lg text-gray-900"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
          >
            שלח
          </button>
        </form>
      </section>
    </div>
  );
}
