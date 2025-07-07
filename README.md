# 🔷 React MongoDB Training

Un progetto di apprendimento full-stack che integra **React** per il frontend, **Node.js + Express** per il backend e **MongoDB** per la persistenza dei dati. L'obiettivo è creare una semplice applicazione CRUD per esercitarsi nello sviluppo web moderno.

---

## 📦 Contenuto del progetto

Struttura principale:

```
react-mongodb-training/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
├── README.md
```

---

## 🛠️ Requisiti

- [Node.js](https://nodejs.org/) (v14 o superiore)
- [MongoDB](https://www.mongodb.com/) (in locale o su Atlas)
- npm o yarn

---

## 🚀 Avvio del progetto

### 1. Clonazione

```bash
git clone https://github.com/Anita-Liberatore/react-mongodb-training.git
cd react-mongodb-training
```

### 2. Setup del Backend

```bash
cd backend
cp .env.example .env
# Modifica .env con la tua connessione MongoDB e porta (es: MONGO_URI)
npm install
npm run dev
```

Avvia il server su `http://localhost:5000`.

### 3. Setup del Frontend

```bash
cd ../frontend
npm install
npm start
```

L'app React sarà visibile su `http://localhost:3000`.

---

## 📡 API Endpoints

Esempi di endpoint REST:

- `GET /api/items` – Recupera tutti gli oggetti
- `GET /api/items/:id` – Recupera un oggetto per ID
- `POST /api/items` – Crea un nuovo oggetto
- `PUT /api/items/:id` – Aggiorna un oggetto esistente
- `DELETE /api/items/:id` – Elimina un oggetto

> Tutte le rotte sono accessibili tramite il prefisso `/api`.

---

## 🧠 Struttura del backend

- **controllers/** – Contiene la logica delle API (funzioni per gestire i dati)
- **models/** – Contiene gli schemi Mongoose per MongoDB
- **routes/** – Definisce le rotte e collega i controller
- **server.js** – Punto d’ingresso dell’app Express

---

## 💻 Frontend React

- Usa `axios` per comunicare con le API
- Organizzato in componenti per la gestione e visualizzazione degli oggetti
- Supporto per operazioni CRUD:
  - Lista degli oggetti
  - Form per creare/modificare
  - Pulsanti per eliminare

---

## 📚 Dipendenze principali

### Backend

- `express`
- `mongoose`
- `cors`
- `dotenv`
- `nodemon` (dev)

### Frontend

- `react`
- `axios`
- `react-router-dom` (opzionale per navigazione)

---

## 🧪 Testing

Attualmente il testing è manuale:

- **Postman** o **Insomnia** per testare le API
- Interazione diretta con l’interfaccia React

Prossimi step:

- Aggiunta di test automatici con **Jest**, **Supertest** o **React Testing Library**

---

## 🌐 Deploy (opzionale)

### Backend

Puoi deployare il backend su:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://heroku.com/)
- [Vercel](https://vercel.com/) (solo serverless)

### Frontend

Puoi deployare il frontend su:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Surge](https://surge.sh/)

### Esempio deploy backend su Heroku

```bash
heroku create nome-progetto
git push heroku main
heroku config:set MONGO_URI="mongodb+srv://..."
```

---

## 👩‍💻 Autrice

**Anita Liberatore**  
Progetto di training full-stack: React + Node.js + MongoDB

---

## 📄 Licenza

Questo progetto è distribuito sotto licenza **MIT**. Consulta il file `LICENSE` per maggiori informazioni.

---

## 📷 Screenshot (da aggiungere)

Aggiungi qui screenshot dell'interfaccia utente o esempi di chiamate API in formato JSON.
