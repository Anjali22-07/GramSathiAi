# 🌾 GramSathi AI

GramSathi AI is an AI-powered government scheme recommendation platform that helps citizens discover welfare schemes they are eligible for through natural language conversations. Users can simply describe their profile in plain English, and the AI extracts relevant information, checks eligibility, and provides personalized scheme recommendations with explanations.

---

## ✨ Features

- 🤖 AI-powered conversational interface
- 📝 Extracts user details (age, income, occupation, state, etc.) from natural language
- 🎯 Personalized government scheme recommendations
- 🧠 AI-generated explanations for why a scheme is suitable
- ⚡ Rule-based eligibility engine for accurate matching
- 🔗 Direct links to official government scheme portals
- 📄 Displays required documents and scheme benefits

---

## 🏗️ Architecture

```
User
   │
   ▼
React Frontend
   │
   ▼
Spring Boot REST API
   │
   ├── Spring AI + LLM
   │       │
   │       ▼
   │  Extract User Information
   │
   ▼
Eligibility Engine
   │
   ▼
MySQL Database
   │
   ▼
Eligible Schemes
   │
   ▼
AI Explanation + Response
```

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Java 21
- Spring Boot
- Spring AI
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### AI
- Spring AI
- Gemini-3.5-flash

---

## 📂 Project Structure

```
GramSathiAI
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── entity/
│   ├── dto/
│   ├── repository/
│   ├── config/
│   └── prompt/
│
└── README.md
```

---

## 🚀 How It Works

1. User enters a query like:

```
I am a 21-year-old female from Uttar Pradesh.
My family income is ₹1.5 lakh.
I belong to the OBC category.
Which government schemes am I eligible for?
```

2. Spring AI extracts structured information.

3. The Eligibility Engine matches the user's profile against government scheme criteria stored in MySQL.

4. The AI generates a human-friendly explanation for each eligible scheme.

5. The frontend displays:
   - Eligible schemes
   - Benefits
   - Required documents
   - Official application links
   - AI explanation

---

## 📸 Screenshots

Add screenshots here.

```
/screenshots/home.png

/screenshots/chat.png

/screenshots/results.png
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/GramSathiAI.git
```

### Backend

```bash
cd backend

mvn spring-boot:run
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 📦 Environment Variables

Backend

```
SPRING_DATASOURCE_URL= 
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=

GEMINI_API_KEY=
```

---

## Example API

### POST

```
POST /eligible
```

Request

```json
{
  "message": "I am a 22-year-old student from Uttar Pradesh with annual income of 1 lakh."
}
```

Response

```json
{
  "totalEligibleSchemes": 2,
  "eligibleSchemes": [
    {
      "schemeName": "Post Matric Scholarship",
      "benefits": "Scholarship assistance",
      "documentsRequired": "Income Certificate",
      "url": "https://..."
    }
  ],
  "aiResponse": "Based on your profile, you qualify for..."
}
```

---

## 🎯 Future Enhancements

- 🎤 Voice input
- 🌍 Multi-language support
- 📍 Location-aware recommendations
- 📄 OCR document verification
- ☁️ Cloud deployment
- 📊 Admin dashboard
- 🔍 Semantic search using vector databases
- 🧠 RAG-based knowledge retrieval

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Anjali Singh**

If you found this project useful, consider giving it a ⭐ on GitHub!
