# نشر i-CARE V8 على Cloudflare Pages (مجاني)

هذه نسخة **DEMO** فقط؛ لا بيانات مرضى، ولا ملفات PDF حقيقية، ولا قاعدة بيانات، ولا مصادقة موظفين. جميع بيانات النتيجة داخل `app.js` وهمية علنية.

1. ادخل Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git.
2. اختر GitHub، والمستودع العام `bahaazmze2026/icare-patient-portal-demo`.
3. اسم المشروع المقترح `icare-neo-portal` (بحسب التوفر)، وحدد **Production branch = cloudflare-icare-v8**.
4. Framework preset = None. **Build command = `exit 0`** (أو فارغ إذا أتاحته الواجهة). **Build output directory = `.`** (جذر المستودع).
5. اضغط Save and Deploy، وبعد النجاح انسخ رابط `*.pages.dev` الذي يظهر في المشروع.
6. راجع الموقع على الهاتف، ثم جرّب: `IC-DEMO-1001` مع `DEMO-A-2026!` أو حالة قيد المراجعة `IC-DEMO-2002` مع `DEMO-B-2026!`.
7. ربط دومين خاص لاحقًا: Pages project > Custom domains.

**مهم:** لا تغيّر الفرع الأساسي `main`؛ ما زال يستضيف العرض القديم على GitHub Pages. اختيار الفرع المذكور يضمن تصميم Cloudflare الجديد فقط.

**حماية:** لا تنشر بيانات مرضى أو أسرار أو حسابات دخول فعلية بهذه الحزمة. `noindex` وملف رؤوس الأمان يقللان المخاطر لكن **لا يجعلان الموقع خاصًا**.

**الدعم:** في حالة فشل البناء راجع اختيار الفرع ومسار النشر وأن الملف `index.html` في جذر المستودع.
