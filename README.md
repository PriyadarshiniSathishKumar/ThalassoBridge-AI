**ThalassoBridge AI**

# 🩸 ThalassoBridge AI

**An AI-powered blood donation and thalassemia support platform built for the Blood Warriors Hackathon.**  
Connects patients, donors, and caregivers through intelligent donor forecasting, multilingual medical support, and emotional care.
<img width="1919" height="823" alt="Screenshot 2025-07-30 220847" src="https://github.com/user-attachments/assets/dceed989-8cec-4aa1-93b0-03231f680453" />
<img width="1893" height="815" alt="Screenshot 2025-07-30 220859" src="https://github.com/user-attachments/assets/1af6b05f-26ff-4a6b-8efd-a82e99fac970" />
<img width="1919" height="811" alt="Screenshot 2025-07-30 220916" src="https://github.com/user-attachments/assets/776ea360-0271-4c7f-8ff9-36c27979778c" />
<img width="1919" height="822" alt="Screenshot 2025-07-30 220925" src="https://github.com/user-attachments/assets/1f260163-6722-482a-91da-23ed7a98aec0" />
<img width="1919" height="819" alt="Screenshot 2025-07-30 220947" src="https://github.com/user-attachments/assets/176b7c42-c992-4c3d-be04-92c71016c2a0" />
<img width="1919" height="824" alt="Screenshot 2025-07-30 221015" src="https://github.com/user-attachments/assets/90c9cffa-aba0-4562-a72e-499c19d40e8a" />

## 🚀 Live Demo

👉 [Try the App on Lovable](https://lovable.dev/projects/b8826985-a1aa-473e-819a-e8d713a01b02)  
📁 [View the GitHub Repository](https://github.com/PriyadarshiniSathishKumar/ThalassoBridge-AI)

## 🧠 Overview

**ThalassoBridge AI** is a unified healthcare support system that combines:

- 🧪 **AI-powered donor prediction** using real-world donation behavior
- 🧬 **Thalassemia diagnosis assistance** using Alpha Thalassemia dataset
- 💬 **Multilingual AI chatbot** for patients and donors in English, Hindi, Tamil
- 📊 **Responsive frontend dashboard** with clean design and real-time interactivity

Built with ❤️ to support thalassemia warriors and the blood donation ecosystem in India.

## 🌟 Features

| Module | Description |
|--------|-------------|
| 🎯 Donor Prediction Engine | Predicts if a donor is likely to donate again based on Recency, Frequency, Volume & Time |
| 🧬 Diagnosis Logic | Interprets blood values like HbA2, HbF, MCV, MCH to assist thalassemia diagnosis |
| 💬 AI Chat Assistant | Empathetic chatbot for patients, donors & caregivers with multilingual support |
| 📋 Donor/Patient Portal | Buttons to register donors, find donors, schedule transfusions, or request emergency help |
| 🌐 Multilingual UX | Auto or manual translation in **English**, **Hindi**, and **Tamil** |

## 🔍 Datasets Used

1. **Blood Transfusion Dataset**  
   ➤ [Kaggle: whenamancodes/blood-transfusion-dataset](https://www.kaggle.com/datasets/whenamancodes/blood-transfusion-dataset)  
   Used for donor likelihood scoring logic.

2. **Alpha Thalassemia Dataset**  
   ➤ [Kaggle: letslive/alpha-thalassemia-dataset](https://www.kaggle.com/datasets/letslive/alpha-thalassemia-dataset)  
   Used to provide diagnosis interpretation and transfusion criteria.

## 🛠️ Built With

- **Framework**: [Vite](https://vitejs.dev/)
- **Frontend**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **UI Kit**: [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration**: [OpenAI API](https://openai.com/)
- **Translation Layer**: Prompt-chaining (Azure Translate planned)
- **Design Platform**: [Lovable](https://lovable.dev/)
- **Languages**: TypeScript, JavaScript, Python (for data analysis)


## 📁 Folder Structure

```

ThalassoBridge-AI/
├── public/
│   └── thalasso-bridge-banner.png
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── chatbot/
│   └── App.tsx
├── README.md
├── package.json
└── vite.config.ts

````

---

## 🧪 Donor Prediction Logic

```ts
// Score calculation example
let score = 0;
if (recency >= 2 && recency <= 6) score += 35;
else if (recency <= 12) score += 20;

score += Math.min(frequency * 5, 30);
score += Math.min(monetary / 100, 20);
score += Math.min(time / 2, 15);

const likelihood = Math.min(Math.max(score, 5), 95);
````

## 👩‍⚕️ How to Run Locally

```
# 1. Clone the repo
git clone https://github.com/PriyadarshiniSathishKumar/ThalassoBridge-AI.git

# 2. Navigate to project folder
cd ThalassoBridge-AI

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

---

## 💬 Sample Chatbot Prompts

```
🧪 “My HbA2 is 3.8%, MCV is 70. What does it mean?”
🩸 “I donated blood 4 months ago. Can I donate again?”
🆘 “Emergency! Need B+ blood in Coimbatore”
```

---

## 🛡️ Ethical Considerations

* ❌ Not a substitute for professional medical advice
* 🔒 Patient privacy respected — no identifiable data stored
* ✅ Transparency in prediction logic
* 📞 Referral to real human help for emergencies

---

## 📢 License

This project is open-sourced for healthcare/non-profit innovation.
Licensed under [MIT](./LICENSE) — feel free to fork and build on it responsibly.

---

## 🙏 Acknowledgements

* Blood Warriors NGO
* Kaggle dataset contributors
* Lovable Team
* AI for Good Hackathon mentors

---

> *“Together, we don’t just predict. We support. We care.”*

```
