# 🚀 نشر الباك اند على Render

## 📋 الخطوات:

### **1️⃣ رفع المشروع على GitHub**

#### أ) إنشاء Git Repository:
```bash
git init
git add .
git commit -m "Initial commit - Timeline Observatory Backend"
```

#### ب) إنشاء Repository على GitHub:
1. اذهب إلى https://github.com
2. اضغط على "New Repository"
3. اسم الـ Repository: `timeline-observatory-backend`
4. اجعله **Public** أو **Private** (حسب رغبتك)
5. **لا تضف** README أو .gitignore (موجودين عندك)
6. اضغط "Create Repository"

#### ج) ربط المشروع مع GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/timeline-observatory-backend.git
git branch -M main
git push -u origin main
```

---

### **2️⃣ نشر على Render**

#### أ) إنشاء حساب:
1. اذهب إلى https://render.com
2. سجل دخول باستخدام GitHub

#### ب) إنشاء Web Service:
1. اضغط على **"New +"** → **"Web Service"**
2. اختر الـ Repository: `timeline-observatory-backend`
3. اضغط **"Connect"**

#### ج) إعدادات الـ Service:

**Name:** `timeline-observatory-backend` (أو أي اسم تريده)

**Environment:** `Node`

**Build Command:** 
```
npm install
```

**Start Command:**
```
npm start
```

**Plan:** اختر **Free**

#### د) إضافة Environment Variables:

اضغط على **"Advanced"** ثم أضف المتغيرات التالية:

| Key | Value |
|-----|-------|
| `MONGO_URI` | `mongodb+srv://malak:malak12345@cluster0.gwvxulo.mongodb.net/timelineDB` |
| `PORT` | `5000` |
| `JWT_SECRET` | `mysupersecret` |

⚠️ **مهم:** انسخ القيم من ملف `.env` الموجود عندك

#### هـ) النشر:
1. اضغط **"Create Web Service"**
2. انتظر 3-5 دقائق حتى ينتهي النشر
3. ستحصل على رابط مثل: `https://timeline-observatory-backend.onrender.com`

---

### **3️⃣ اختبار الباك اند المنشور**

افتح المتصفح واذهب إلى:
```
https://timeline-observatory-backend.onrender.com
```

يجب أن تظهر رسالة: **"Backend is running!"**

اختبر الـ API:
```
https://timeline-observatory-backend.onrender.com/api/events
```

---

### **4️⃣ ربط الفرونت اند (Next.js على Vercel)**

#### في مشروع الفرونت اند:

**أ) أنشئ ملف `.env.local`:**
```env
NEXT_PUBLIC_API_URL=https://timeline-observatory-backend.onrender.com/api
```

**ب) في الكود، استخدم:**
```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// مثال
fetch(`${API_URL}/events`)
  .then(res => res.json())
  .then(data => console.log(data));
```

**ج) في Vercel Dashboard:**
1. اذهب إلى مشروعك على Vercel
2. اضغط **Settings** → **Environment Variables**
3. أضف:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://timeline-observatory-backend.onrender.com/api`
4. اضغط **Save**
5. أعد نشر المشروع (Redeploy)

---

## ⚠️ **ملاحظات مهمة:**

### **1. Free Tier على Render:**
- ✅ مجاني تماماً
- ⚠️ السيرفر ينام بعد 15 دقيقة من عدم الاستخدام
- ⚠️ أول طلب بعد النوم يأخذ 30-60 ثانية (cold start)
- ✅ بعدها يعمل بسرعة عادية

### **2. حل مشكلة Cold Start:**
يمكنك استخدام خدمة مثل **UptimeRobot** لإرسال طلب كل 10 دقائق لإبقاء السيرفر مستيقظاً.

### **3. الأمان:**
- ✅ لا ترفع ملف `.env` على GitHub (موجود في `.gitignore`)
- ✅ استخدم Environment Variables في Render
- ⚠️ غيّر `JWT_SECRET` إلى قيمة أقوى في الإنتاج

---

## 🎯 **الخلاصة:**

```
GitHub → Render → Vercel
  ↓        ↓        ↓
 Code   Backend  Frontend
```

1. ✅ رفع الكود على GitHub
2. ✅ نشر الباك اند على Render
3. ✅ ربط الفرونت اند (Vercel) مع الباك اند (Render)

---

## 📞 **روابط مهمة:**

- **GitHub:** https://github.com
- **Render:** https://render.com
- **Vercel:** https://vercel.com

---

## ✅ **بعد النشر، الروابط ستكون:**

- **Frontend (Vercel):** `https://your-project.vercel.app`
- **Backend (Render):** `https://timeline-observatory-backend.onrender.com`
- **API:** `https://timeline-observatory-backend.onrender.com/api/events`

---

## 🆘 **إذا واجهت مشاكل:**

### **مشكلة: "Application failed to respond"**
- تأكد من أن `PORT` في Environment Variables = `5000`
- تأكد من أن Start Command = `npm start`

### **مشكلة: "Cannot connect to MongoDB"**
- تأكد من أن `MONGO_URI` صحيح في Environment Variables
- تأكد من أن MongoDB Atlas يسمح بالاتصال من أي IP (0.0.0.0/0)

### **مشكلة: CORS Error في الفرونت اند**
- تأكد من أن `app.use(cors())` موجود في `src/index.js`
