# نشر موقع i-CARE الجديد على Cloudflare Pages — 2026-11-01

## ما تم تنفيذه
- تصميم جديد للصفحة الرئيسية بالعربية والاتجاه RTL مع ألوان وشعار i-CARE.
- الحفاظ على النسخة القديمة لبوابة النتائج التوضيحية عند /results.html.
- لا توجد بيانات مرضى حقيقية، ولا قاعدة بيانات أو آلية تسجيل دخول حقيقي.
- استخدام ملف _headers لتوجيه عدم الفهرسة وحماية أساسية ضد تضمين الموقع.

## المصدر الصحيح
- GitHub: bahaazmze2026/icare-patient-portal-demo
- Production branch: cloudflare-i-care-site-2026-11
- Website home: /index.html
- Synthetic results demo: /results.html

## خطوات Cloudflare (مرة واحدة فقط)
1. افتح https://dash.cloudflare.com/ واختر حسابك.
2. من Workers & Pages اختر Create > Pages > Connect to Git.
3. اربط GitHub واختر مستودع bahaazmze2026/icare-patient-portal-demo.
4. حدد اسم المشروع icare-neo-portal-demo، أو أي اسم متاح.
5. في Production branch اختر cloudflare-i-care-site-2026-11 (وليس main).
6. Framework preset: None. Build command: اتركه فارغًا. Build output directory: . (النقطة تعني جذر المستودع). Root directory: / أو اتركه الافتراضي.
7. اضغط Save and Deploy. انسخ رابط *.pages.dev الظاهر في لوحة Cloudflare بعد النجاح.

الرابط icare-neo-portal-demo.pages.dev مثال غير مفعل حتى يتم النشر.

## الاختبار
- افتح الصفحة الرئيسية من الهاتف والكمبيوتر.
- اختبر القائمة وزر نتائج التحاليل وتأكد من عمل /results.html.
- لا تدخل بيانات أو كلمات مرور أو تقارير حقيقية.
- عند تطوير الباك إند الفعلي، يجب إنشاء نظام منفصل آمن والمراجعة قبل التعامل مع بيانات المرضى.

## لاحقًا
عند شراء دومين يمكن ربطه بنفس مشروع Cloudflare Pages من Settings > Custom domains دون إعادة بناء الموقع.
