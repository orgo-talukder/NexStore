# NexStore — Official App Ecosystem

> **"Your Apps. Your Ecosystem."**

NexStore হলো একটি প্রিমিয়াম, দ্রুত এবং মডার্ন **Web-based Official App Marketplace**। এটি কোনো ওপেন বা থার্ড-পার্টি মার্কেটপ্লেস নয়; এটি সম্পূর্ণভাবে নিজস্ব ইকোসিস্টেমের অফিশিয়াল অ্যাপ্লিকেশনগুলোর সেন্ট্রালাইজড ডিস্ট্রিবিউশন হাব হিসেবে কাজ করে।

---

## 🚀 Core Philosophy & Architecture

* **100% First-Party Builds:** কোনো থার্ড-পার্টি ডেভেলপার রেজিস্ট্রেশন বা ওপেন অ্যাপ সাবমিশন নেই।
* **Direct APK Distribution:** অ্যাপ্লিকেশন বাইনারি (APK) সরাসরি **GitHub Releases** সিডিএন থেকে ডেলিভার করা হয়।
* **High-Speed Asset Delivery:** অ্যাপ আইকন এবং স্ক্রিনশট **ImgBB** ক্লাউডে হোস্ট করা হয়।
* **Realtime Cloud Catalog:** অ্যাপের মেটাডাটা ও ভার্সন হিস্টোরি **Firebase Firestore** থেকে ফেচ করা হয়।
* **Zero Bloatware / MPA:** মাল্টি-পেইজ আর্কিটেকচার (MPA), পিওর Vanilla HTML5, Modern CSS3 (Dark Premium Theme) এবং ES Modules-এ নির্মিত। কোনো ভারী ফ্রন্টএন্ড ফ্রেমওয়ার্কের নির্ভরতা নেই।

---

## 📁 Project Structure

```text
NexStore/
│
├── index.html              # Home Page (Hero, Featured, Popular Apps)
├── apps.html               # All Applications (Filtering & Sorting)
├── categories.html         # Category Directory & Dynamic App Viewer
├── search.html             # Search Engine (Multi-field client search)
├── app.html                # App Details, Screenshots & Download CTA
├── about.html              # Ecosystem Philosophy, Terms & Contact
│
├── js/
│   └── firebase-init.js    # Central Firebase SDK & Firestore Initializer
│
├── assets/
│   ├── logo/               # Vector branding assets
│   ├── icons/              # Favicon & UI icons
│   └── images/             # Static graphics
│
├── README.md               # Documentation & Setup Guide
└── .gitignore