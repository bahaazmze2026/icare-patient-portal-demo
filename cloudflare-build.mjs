// Build static Cloudflare Pages site from existing public synthetic-data-only demo.
import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
const read=(p)=>readFileSync(new URL(p,import.meta.url),'utf8');
let html=read('./index.html');
const landing=read('./cloudflare-landing.html').trim();
if(!html.includes('main.innerHTML=\`<section class="access">'))throw Error('Unexpected source structure');
html=html.replace('</head>','<link rel="stylesheet" href="/cloudflare-style.css"></head>');
html=html.replace('</header>','</header><nav class="neo-nav" aria-label="التنقل"><a href="#neo-hero">الرئيسية</a><a href="#neo-services">خدماتنا</a><a href="#neo-how">طريقة الاستخدام</a><a href="#neo-results">نتائج التحاليل</a></nav>');
html=html.replace('main.innerHTML=\`<section class="access">','main.innerHTML=\`'+landing+'<section class="access" id="neo-results">');
mkdirSync('dist',{recursive:true});writeFileSync('dist/index.html',html,'utf8');
copyFileSync('cloudflare-style.css','dist/cloudflare-style.css');
writeFileSync('dist/robots.txt','User-agent: *\nDisallow: /\n');
writeFileSync('dist/_headers','/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  X-Robots-Tag: noindex, nofollow, noarchive\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n');
writeFileSync('dist/404.html','<!doctype html><html lang="ar" dir="rtl"><meta charset="utf-8"><title>i-CARE | غير موجود</title><p>الصفحة غير موجودة. <a href="/">الرئيسية</a></p></html>');
console.log('Cloudflare Pages dist ready (synthetic data only).');
