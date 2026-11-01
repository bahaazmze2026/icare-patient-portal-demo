"use strict";
(function(){
  const menu=document.querySelector(".menu-toggle"),nav=document.getElementById("mainNav");
  if(menu&&nav){
    menu.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(isOpen));menu.setAttribute("aria-label",isOpen?"إغلاق القائمة":"فتح القائمة");});
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
  }
  const visit=document.getElementById("visitCode"),code=document.getElementById("accessCode"),message=document.getElementById("resultMessage");
  const fill=document.getElementById("fillDemo"),peek=document.getElementById("peekCode"),form=document.getElementById("lookupForm");
  if(fill)fill.addEventListener("click",()=>{visit.value="IC-DEMO-1001";code.value="DEMO-A-2026!";message.hidden=true;visit.focus()});
  if(peek)peek.addEventListener("click",()=>{const show=code.type==="password";code.type=show?"text":"password";peek.textContent=show?"إخفاء":"إظهار";peek.setAttribute("aria-pressed",String(show))});
  function showMessage(type,title,detail){
    message.hidden=false;message.className="form-message "+type;
    message.replaceChildren();
    const strong=document.createElement("strong");strong.textContent=title;
    const p=document.createElement("div");p.textContent=detail;
    message.append(strong,p);
  }
  if(form)form.addEventListener("submit",e=>{
    e.preventDefault();
    const id=visit.value.trim().toUpperCase(),token=code.value.trim();
    if(!id||!token)return showMessage("error","يرجى إدخال البيانات.","يمكنك الضغط على «تعبئة بيانات تجريبية تلقائيًا» لتجربة النموذج.");
    if(id==="IC-DEMO-1001"&&token==="DEMO-A-2026!")return showMessage("success","✓ التقرير التجريبي جاهز.","الزيارة IC-DEMO-1001 — الحالة: تم الاعتماد (محاكاة فقط). لا يوجد تقرير طبي أو ملف حقيقي للتحميل.");
    if(id==="IC-DEMO-2002"&&token==="DEMO-B-2026!")return showMessage("pending","◷ التقرير التجريبي لم يصدر بعد.","الزيارة IC-DEMO-2002 — الحالة: قيد المراجعة (محاكاة فقط).");
    return showMessage("error","بيانات التجربة غير صحيحة.","استخدم رقم IC-DEMO-1001 وكود DEMO-A-2026! — لا تُدخل أي بيانات مرضى حقيقية.");
  });
})();