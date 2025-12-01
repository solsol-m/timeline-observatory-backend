# 🚀 Timeline Observatory API Guide

## Base URL
```
http://localhost:5000/api
```

---

## 📚 Available Endpoints

### 1️⃣ **Get All Events** (with pagination & filters)
```
GET /events
```

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)
- `search` - Search in title/description
- `category` - Filter by category
- `continent` - Filter by continent
- `start` - Start year
- `end` - End year
- `sort` - Sort field:direction (e.g., "year:asc")

**Example:**
```javascript
fetch('http://localhost:5000/api/events?page=1&limit=10&category=War')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Response:**
```json
{
  "data": [...],
  "total": 200,
  "page": 1,
  "pages": 10
}
```

---

### 2️⃣ **Get Single Event**
```
GET /events/:id
```

**Example:**
```javascript
fetch('http://localhost:5000/api/events/6024769b35dc8c7f31f2378c')
  .then(res => res.json())
  .then(event => console.log(event));
```

---

### 3️⃣ **Create New Event**
```
POST /events
```

**Body:**
```json
{
  "title": "Event Title",
  "year": 2024,
  "category": "Technology",
  "continent": "Asia",
  "shortDescription": "Description here",
  "coordinates": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}
```

**Example:**
```javascript
fetch('http://localhost:5000/api/events', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "New Event",
    year: 2024,
    category: "Technology",
    continent: "Asia"
  })
})
.then(res => res.json())
.then(event => console.log(event));
```

---

### 4️⃣ **Update Event**
```
PUT /events/:id
```

**Example:**
```javascript
fetch('http://localhost:5000/api/events/6024769b35dc8c7f31f2378c', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Updated Title"
  })
})
.then(res => res.json())
.then(event => console.log(event));
```

---

### 5️⃣ **Delete Event**
```
DELETE /events/:id
```

**Example:**
```javascript
fetch('http://localhost:5000/api/events/6024769b35dc8c7f31f2378c', {
  method: 'DELETE'
})
.then(res => res.json())
.then(result => console.log(result));
```

---

### 6️⃣ **Get Map Data** (lightweight)
```
GET /events/map/data
```

Returns only essential fields for map visualization.

**Example:**
```javascript
fetch('http://localhost:5000/api/events/map/data')
  .then(res => res.json())
  .then(events => console.log(events));
```

---

### 7️⃣ **Statistics Endpoints**

#### **Events by Category**
```
GET /events/stats/categories
```

**Response:**
```json
[
  { "_id": "War", "count": 12 },
  { "_id": "Empire", "count": 6 }
]
```

#### **Events by Continent**
```
GET /events/stats/continents
```

**Response:**
```json
[
  { "_id": "Europe", "count": 181 },
  { "_id": "Americas", "count": 7 }
]
```

#### **Events by Century**
```
GET /events/stats/centuries
```

**Response:**
```json
[
  { "_id": -32, "count": 1 },
  { "_id": 19, "count": 15 }
]
```

#### **Peak Timeline** (Top 10 decades)
```
GET /events/stats/peak
```

**Response:**
```json
[
  { "_id": 1940, "count": 3 },
  { "_id": 1910, "count": 2 }
]
```

---

## 🎨 **Frontend Integration Examples**

### **React Example:**

```javascript
import { useState, useEffect } from 'react';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {events.map(event => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>Year: {event.year}</p>
          <p>Category: {event.category}</p>
        </div>
      ))}
    </div>
  );
}
```

### **Axios Example:**

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Get all events
export const getEvents = (params) => API.get('/events', { params });

// Get single event
export const getEvent = (id) => API.get(`/events/${id}`);

// Create event
export const createEvent = (data) => API.post('/events', data);

// Update event
export const updateEvent = (id, data) => API.put(`/events/${id}`, data);

// Delete event
export const deleteEvent = (id) => API.delete(`/events/${id}`);

// Get statistics
export const getCategories = () => API.get('/events/stats/categories');
export const getContinents = () => API.get('/events/stats/continents');
```

---

## 🔧 **Available Categories:**
- War
- Empire
- Civilization
- Politics
- Disease
- Invention
- Engineering
- Knowledge
- Religion
- Exploration
- Architecture
- Space
- Industry
- Science
- Law
- General

## 🌍 **Available Continents:**
- Europe
- Americas
- Asia
- Middle East
- Africa

---

## ✅ **CORS Enabled**
The backend has CORS enabled, so you can call it from any frontend application running on a different port.

---

## 🚀 **Quick Test**
Open your browser console and try:
```javascript
fetch('http://localhost:5000/api/events/stats/categories')
  .then(res => res.json())
  .then(data => console.log(data));
```
