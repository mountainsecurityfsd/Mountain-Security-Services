# Mountain Security Services (Pvt) Ltd — Enterprise Web Application

A production-grade, responsive corporate website and workforce requisition platform for **Mountain Security Services (Pvt) Ltd**, Faisalabad, Pakistan.

---

## 🏢 Brand & Corporate Profile

- **Company Name:** Mountain Security Services (Pvt) Ltd
- **Tagline:** *Security You Can Trust*
- **Registered Headquarters:** 2nd Floor, Arshad Center, near General Bus Stand, Faisalabad, Punjab, Pakistan
- **Operations:** 24/7 Operations Command & Dispatch
- **Direct Hotlines:** `0329-9200111` | `0329-7200222` | `0300-0266204`
- **WhatsApp Desk:** `+92 300 0266204`
- **Official Email:** `mountainsecurityserivces@gmail.com`
- **Regulatory Status:** Licensed & Registered Private Security Agency (Punjab Home Department compliant)

---

## 🚀 Key Features

1. **Pixel-Accurate Corporate Design:**
   - Deep Midnight Navy executive palette (`#0B132B`, `#0F172A`, `#1C2541`, `#0077B6`, `#00B4D8`, white).
   - High-contrast typography combining `Outfit` (display/headlines), `Inter` (body), `Plus Jakarta Sans` (labels/telemetry), and `Noto Nastaliq Urdu` (Urdu calligraphy).
   - Real-world telemetry indicators and responsive layout grids.

2. **12 Verified Workforce Divisions:**
   - Armed & Unarmed Security Guards (مسلح و غیر مسلح)
   - Executive Chauffeurs & Drivers (ایل ٹی وی / ایچ ٹی وی)
   - Commercial Cooks & Chefs (باورچی و شیف)
   - Estate Gardeners (Mali) (مالی / باغبانی)
   - Office Support & Office Boys (آفس بوائے و دفتری معاونت)
   - Front Desk Officers & Receptionists (ریسیپشنسٹ و فرنٹ ڈیسک)
   - Commercial Cleaning & Janitorial Teams (صفائی عملہ و جانٹرز)
   - Textile & Factory Assembly Workers (فیکٹری ورکرز)
   - Warehouse & Supply Chain Labor (گودام ورکرز)
   - Certified Industrial Electricians (الیکٹریشن)
   - Skilled Masons (Mistri) (معمار / راج مستری)
   - Waiters & Hospitality Staff (ویٹرز و ضیافت عملہ)

3. **WhatsApp Contact Selection Modal:**
   - Single prominent WhatsApp entry point in main navigation.
   - Interactive modal allows selecting between all 3 verified channels:
     - `0329-9200111` (`https://wa.me/923299200111`) — Operations & Duty Desk
     - `0329-7200222` (`https://wa.me/923297200222`) — Deployment & Support
     - `0300-0266204` (`https://wa.me/923000266204`) — Direct Command & Inquiries
   - Escape key, backdrop dismiss, and body scroll lock prevention.

4. **Employer Staff Requisition Portal (`/hire-staff`):**
   - 4-step calibrated requisition builder: Enterprise Credentials, Point of Contact, 12-Category Multi-Select, and Scheduling.
   - Live reactive sidebar calculating headcount, selected trades, deployment territory, and SLA guarantees.
   - Pakistani phone format validation and instantaneous ticket generation (`#MSS-REQ-XXXX`).

4. **Worker Careers Hub (`/careers`):**
   - Free candidate registration hub for guards, drivers, and technical trades.
   - 13-digit Pakistani CNIC validation (`XXXXX-XXXXXXX-X`), police certificate declaration, and instant registration tracking (`#MSS-REG-XXXX`).

5. **Bilingual English & Urdu Layout:**
   - Seamless top-bar toggle between `EN` and `اردو`.
   - Right-To-Left (`dir="rtl"`) layout flipping with adjusted line-heights and font baselines.

6. **Interactive Quick Requisition Modal:**
   - Requisition slips triggerable directly from any service card or directory tab with prefilled trade details.

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React + Material Symbols
- **Testing:** Vitest
- **Build Tool:** Vite 8

---

## 📦 Getting Started

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the development server on port 3000:
```bash
npm run dev
```

### 3. Running Tests
Run the test suite:
```bash
npm run test
```

### 4. Production Build & GitHub Pages
Verify TypeScript compilation and create the optimized production build:
```bash
npm run build
```

The output will be generated inside the `dist/` directory with `base: '/Mountain-Security-Services/'`.

### 5. GitHub Pages Deployment
1. Under **Settings > Pages** on GitHub:
   - Source: **GitHub Actions**
2. Push your changes to `main` (or `master`).
3. The automated workflow `.github/workflows/deploy.yml` will run tests, build the bundle, and deploy to `https://mountainsecurityfsd.github.io/Mountain-Security-Services/`.

---

## 🔒 Verification & Compliance Notice

All candidate vetting is performed strictly according to authorized standards:
- **NADRA Biometrics:** Biometric identity verification against government databases.
- **Police Character Clearance:** Cross-checked with Faisalabad SSP Office and Special Branch.
- **Medical Panels:** Physical fitness, drug screening, and hepatitis panels.
- **Replacement SLA:** Standby officers deployed within 24-48 hours upon requisition confirmation.
