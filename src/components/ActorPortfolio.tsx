import { motion } from "framer-motion";

export default function ActorPortfolio() {
  return (
    <div dir="rtl" className="font-sans bg-gray-50 text-gray-900 min-h-screen">
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
          שחקן תיאטרון • קולנוע • במה
        </motion.p>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">עליי</h2>
        <p className="text-lg leading-relaxed">
          אני אלון – שחקן, יוצר, מוזיקאי, מאלתר ומורה לאלתור. התשוקה שלי היא
          לחקור את המפגש החי בין גוף, קול ודמיון – על במה, מול מצלמה, ובחיים
          עצמם. במסעות שלי בין תיאטרון, כתיבה, מוזיקה ואלתור, אני מחפש את
          המקומות שבהם הפגיעות הופכת לעוצמה, הצחוק נולד מתוך הרגע, והשקט נפתח
          למרחבים חדשים. מחפשים מנחה לסדנת אימפרוב, אמן להופעה אינטימית, שחקן
          לפרויקט, או פשוט רוצים ליצור חיבור? מוזמנים לפנות אליי – אשמח לשמוע,
          לחלוק, ולצאת איתכם להרפתקה הבאה.✨🎭🥁
        </p>
      </section>

      {/* Showreel */}
      <section className="bg-gray-100 py-16 px-6 text-center">
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
