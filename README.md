# ❤️ Mehin - Interactive Educational Platform

> A comprehensive, child-friendly learning application built with **React** and **Vite**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-Azerbaijani-red)

---

## 🌟 Project Overview

**Mehin** is an interactive educational web application designed for children to learn fundamental concepts through engaging, colorful, and interactive modules. The platform covers geography, calendar systems, space exploration, and mathematics in Azerbaijani language.

**Built for:** A child named Mehin  
**Purpose:** Make learning fun, visual, and engaging  
**Language:** Azerbaijani (Azərbaycanca)

---

## 📚 Features

### 🏠 **Main Sections**

#### 1. **📅 Ölkəm (My Country)**
- National information about Azerbaijan
- Interactive country facts
- Educational content about home country

#### 2. **💧 Sular & Okeanlar (Waters & Oceans)**
- 5 World Oceans with detailed information
- Ocean rankings and characteristics
- Fun facts about marine environments
- Interactive water concept learning

#### 3. **📆 Təqvim (Calendar)**
- **📅 Aylar (Months)** - All 12 months with emojis and seasonal info
- **📆 Həftə (Weeks)** - Understanding weeks in a month
- **🗓️ Günlər (Days)** - 7 days of the week with work/rest indicators
- Colorful season-coded cards
- Interactive learning cards

#### 4. **🌍 Materiklər (Continents)**
- All 6 continents with unique emojis
- Fun facts and characteristics
- Representative animals for each continent
- Gradient-colored educational cards

#### 5. **🚀 Kosmos (Space)**
- Interactive 8-planet solar system
- Detailed planet information:
  - Distance from sun
  - Temperature ranges
  - Number of moons and rings
  - Habitability status
  - Fascinating facts
- Colorful planet cards with fun emojis

#### 6. **🎯 Test (General Quiz)**
- 32 diverse questions covering all topics
- Filterable by topic
- Emoji-based feedback system
- Scoring with achievement levels:
  - 🏆 Perfect (100%)
  - 🥇 Excellent (80%+)
  - 🥈 Good (60%+)
  - 🥉 Average (40%+)
  - 📚 Keep trying (<40%)

---

### **📐 RIYAZIYYAT (Mathematics)**

The mathematics section is comprehensive and interactive with two main subsections:

#### **📝 Testlər (Tests)**

**Two Learning Modules:**

1. **📐 Misal (Equation Practice)** - Learn through equations
   - **➕ Toplama (Addition)** - 25 questions
     - Format: `10 + X = 13, X = ?`
     - Visual separation of equation and answer
     - Color-coded: Green for equation, Orange for `X = ?`
   
   - **➖ Çıxma (Subtraction)** - 25 questions
     - Format: `20 - X = 12, X = ?`
     - Progressive difficulty
   
   - **✖️ Vurma (Multiplication)** - 25 questions
     - Format: `X × 3 = 21, X = ?`
     - Builds number sense
   
   - **➗ Bölmə (Division)** - 25 questions
     - Format: `24 ÷ X = 6, X = ?`
     - Reinforces multiplication concepts

2. **📖 Məsələ (Story Problems)** - Learn through real-world contexts
   - 20 child-friendly story problems
   - Uses emojis for visual appeal
   - Topics include: chocolate, balloons, books, games, sports
   - No abstract `X` notation
   - 1 age-related problem: "How old will Mehin be in 8 years?"
   - Natural language phrasing

**Features:**
- Multiple choice answers (4 options)
- Instant feedback (✅ Correct / ❌ Wrong)
- Progress tracking
- Achievement system with emojis
- Score calculation and motivation messages

#### **📊 Vurma Cədvəli (Multiplication Tables)**

Interactive learning through multiplication tables:

- **1-10 Multiplication Tables** in card format
- Each table in separate card:
  - **1 cədvəl:** 1×1 to 1×10
  - **2 cədvəl:** 2×1 to 2×10
  - ... up to **10 cədvəl**
- Clean, readable format optimized for memorization
- Key learning tips:
  - 1 × anything = the number itself
  - 10 × anything = the number + zero
- Color-coded cards for easy scanning

---

## 🎨 Design Features

- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Colorful Interface**: 
  - 🔵 Blue for oceans
  - 🟢 Green for mathematics
  - 🟠 Orange for space
  - 🔴 Red for seasons/autumn
  - 💛 Yellow for achievements
- **Interactive Elements**: Hover effects, clickable cards, buttons
- **Child-Friendly**: Large text, clear icons, pleasant color schemes
- **Smooth Animations**: Transitions and visual feedback
- **Gradient Backgrounds**: Modern, appealing design

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 18+** | UI Framework |
| **Vite** | Build tool & Dev server |
| **JavaScript (ES6+)** | Programming language |
| **CSS-in-JS** | Inline styling |
| **Hooks** | State management (useState, useEffect) |
| **Google Fonts** | Typography (Nunito, Baloo 2) |

---

## 📦 Project Structure

```
my-site/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Base styles
│   └── assets/              # Images & media
├── public/                  # Static files
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── eslint.config.js         # Linting rules
├── index.html               # HTML entry point
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/azar790/react-site.git
cd react-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app runs on `http://localhost:5173` by default

Hot Module Replacement (HMR) is enabled for instant updates

---

## 📊 Content Statistics

| Category | Count | Details |
|----------|-------|---------|
| **Months** | 12 | Jan-Dec with seasons |
| **Days** | 7 | Mon-Sun |
| **Continents** | 6 | With facts & animals |
| **Oceans** | 5 | Ranked by size |
| **Planets** | 8 | Full solar system |
| **Quiz Questions** | 32 | General knowledge |
| **Addition Problems** | 25 | Equation format |
| **Subtraction Problems** | 25 | Equation format |
| **Multiplication Problems** | 25 | Equation format |
| **Division Problems** | 25 | Equation format |
| **Story Problems** | 20 | Real-world context |
| **Multiplication Tables** | 10 | 1-10 tables |
| **Total Questions** | 197 | All types |

---

## 🎓 Learning Outcomes

After using Mehin, a child will:

✅ Know the 12 months and their seasonal patterns  
✅ Understand weeks, days, and calendar concepts  
✅ Learn about 6 continents and their characteristics  
✅ Know the 5 world oceans  
✅ Explore the 8 planets of our solar system  
✅ Solve basic addition problems  
✅ Solve basic subtraction problems  
✅ Solve basic multiplication problems  
✅ Solve basic division problems  
✅ Memorize multiplication tables (1-10)  
✅ Apply math to real-world story problems  
✅ Get motivated through achievement system  

---

## 🎯 Key Features Highlights

### For Learning
- 📚 Multiple learning formats (visual, interactive, text-based)
- 🎮 Gamified quiz system with instant feedback
- 🏆 Achievement tracking with emoji rewards
- 📊 Progress bars for motivation
- 🌈 Color-coded topics for easy recognition

### For Children
- 👧 Child-friendly language and tone
- 🎨 Bright, appealing colors and emojis
- 📱 Mobile-responsive design
- 🚀 Fast, smooth interactions
- 💡 Encouraging feedback messages

### For Parents/Educators
- 📈 Clear learning progression
- 📝 Diverse question types
- ✨ Engaging content
- 🎯 Focused learning objectives
- 🌍 Culturally relevant (Azerbaijan)

---

## 🔧 Future Enhancements

- [ ] User profiles & progress saving
- [ ] Difficulty levels
- [ ] Time-based challenges
- [ ] Leaderboard system
- [ ] More languages
- [ ] Sound effects
- [ ] Animation improvements
- [ ] PDF export of progress
- [ ] Parent dashboard
- [ ] Additional math topics

---

## 📝 Component Overview

### Main Functions

- **`App()`** - Main application component with tab navigation
- **`Quiz()`** - General knowledge quiz with filtering
- **`QuizMath()`** - Mathematics tests with sub-sections
- **`SectionTeqvim()`** - Calendar and time learning
- **`SectionOlkem()`** - Country information
- **`SectionMateriklər()`** - Continents explorer
- **`SectionSularVeOkeanlar()`** - Oceans & waters
- **`SectionKosmos()`** - Solar system
- **`useWidth()`** - Responsive width hook

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on GitHub Pages
```bash
npm run build
# Push build folder to gh-pages branch
```

### Deploy on Netlify
```bash
npm run build
# Connect repository to Netlify
```

---

## 👨‍💻 Development Notes

- **State Management**: Uses React Hooks (useState)
- **Responsive Design**: CSS Grid and Flexbox
- **Styling**: Inline React styles for component encapsulation
- **No External CSS Framework**: Custom styling for full control
- **Performance**: Optimized with React best practices

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👥 Author

Created with ❤️ for **Mehin**

### Contact & Contribution

If you'd like to contribute or have suggestions:
- Open an issue on GitHub
- Submit a pull request
- Share feedback

---

## 🙏 Acknowledgments

- Built with React & Vite
- Inspired by child-centric design principles
- Icons and emojis from Unicode & Emoji standards
- Fonts from Google Fonts

---

## 📞 Support

For questions or support, please open an issue on the GitHub repository:
**https://github.com/azar790/react-site**

---

<div align="center">

**Made with ❤️ for learning**

⭐ If you find this helpful, please star the repository!

</div>
