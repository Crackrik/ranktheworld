# RankEverything - Universal Ranking Platform

A sophisticated web application that allows users to rank anything in existence - from movies and music to books, games, and beyond. Built with modern web technologies and advanced ranking algorithms.

## 🌟 Features

### Core Ranking System
- **Universal Search**: Intelligent search across all categories
- **Head-to-Head Comparisons**: Pairwise ranking with Elo algorithm
- **Multiple Ranking Methods**: Elo, Bradley-Terry, and more
- **Real-time Results**: Live ranking updates and visualizations

### Interactive Experience
- **Drag & Drop Ranking**: Alternative ranking method
- **Progress Tracking**: Visual progress indicators
- **Achievement System**: Unlock badges and milestones
- **Social Features**: Community rankings and challenges

### Data Visualization
- **Interactive Charts**: ECharts-powered visualizations
- **Ranking Analytics**: Statistical analysis and insights
- **Trend Analysis**: Historical ranking data
- **Comparison Tools**: Side-by-side item comparisons

## 🛠 Technical Stack

### Frontend
- **HTML5**: Semantic markup and modern standards
- **CSS3**: Flexbox, Grid, and custom animations
- **Tailwind CSS**: Utility-first styling framework
- **Vanilla JavaScript**: Modern ES6+ features

### Libraries & Frameworks
- **Anime.js**: Smooth animations and micro-interactions
- **ECharts.js**: Interactive data visualizations
- **Typed.js**: Typewriter effects for dynamic content
- **Splitting.js**: Advanced text animations

### Ranking Algorithms
- **Elo Rating System**: Chess-inspired ranking algorithm
- **Bradley-Terry Model**: Statistical pairwise comparison
- **Custom Algorithms**: Tailored for different use cases

## 📁 Project Structure

```
RankEverything/
├── index.html              # Main application page
├── js/
│   └── main.js             # Core JavaScript functionality
├── css/
│   └── styles.css          # Custom styles (embedded in HTML)
├── assets/
│   └── images/             # Static images and assets
├── design.md               # Visual design guide
├── interaction.md          # Interaction design documentation
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or download** the project files
2. **Navigate** to the project directory
3. **Start a local server** (optional):
   ```bash
   python -m http.server 8000
   ```
4. **Open** `index.html` in your web browser

### Development Setup

For development with live reload:

```bash
# Install live-server globally
npm install -g live-server

# Start development server
live-server --port=3000
```

## 💡 Usage

### Starting a Ranking Session

1. **Browse Categories**: Explore popular categories on the homepage
2. **Select Category**: Click on any category card to start ranking
3. **Head-to-Head Comparison**: Choose between two items
4. **Progress Through Pairs**: Complete 10 ranking pairs
5. **View Results**: See your personalized ranking results

### Ranking Methods

**Head-to-Head (Default)**:
- Compare two items side-by-side
- Click "Choose This One" for your preference
- Skip pairs you're unsure about
- View real-time progress

**Drag & Drop (Future Feature)**:
- Reorder items in a list
- Visual feedback during ranking
- Bulk ranking operations

### Understanding Results

**Elo Scores**: 
- Higher scores indicate better rankings
- Scores update based on comparison outcomes
- Algorithm accounts for strength of opposition

**Confidence Intervals**:
- Statistical measure of ranking certainty
- Higher values indicate more reliable rankings
- Based on number of comparisons and consistency

## 🧠 Ranking Algorithms

### Elo Rating System
- **Origin**: Chess rating system
- **Method**: Pairwise comparisons with rating updates
- **Formula**: `New Rating = Old Rating + K × (Actual Score - Expected Score)`
- **Advantages**: Simple, intuitive, handles new items well

### Bradley-Terry Model
- **Origin**: Statistical paired comparison model
- **Method**: Maximum likelihood estimation
- **Formula**: `P(i beats j) = λi / (λi + λj)`
- **Advantages**: Statistically robust, handles ties well

### Custom Algorithms
- **Weighted Rankings**: Different weights for different comparison types
- **Time Decay**: Older comparisons have less influence
- **Confidence Boosting**: Increase confidence with more comparisons

## 🎨 Design System

### Colors
- **Deep Slate** (#1e293b): Primary text and interface
- **Warm White** (#fefefe): Background and surfaces
- **Accent Orange** (#f97316): Primary actions and highlights
- **Ranking Blue** (#3b82f6): Data visualization
- **Success Green** (#10b981): Positive actions
- **Warning Amber** (#f59e0b): Attention states

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Scale**: 12px-48px responsive sizing

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Progress Bars**: Animated fills with color gradients
- **Charts**: Interactive ECharts with custom themes

## 🔄 Features in Detail

### Search & Discovery
- **Global Search**: Search across all categories
- **Auto-complete**: Intelligent suggestion system
- **Category Browsing**: Visual category exploration
- **Trending Items**: Popular items to rank

### Ranking Interface
- **Responsive Design**: Works on all screen sizes
- **Touch Optimized**: Mobile-friendly interactions
- **Keyboard Navigation**: Full keyboard support
- **Accessibility**: Screen reader compatible

### Results & Analytics
- **Interactive Charts**: Hover for detailed information
- **Ranking Lists**: Top 20 with detailed scores
- **Statistics Panel**: Total votes, participants, confidence
- **Export Options**: Download ranking data (future feature)

## 🎯 Advanced Features

### Algorithm Configuration
```javascript
// Customize ranking algorithm
const config = {
    algorithm: 'elo', // 'elo', 'bradley-terry', 'custom'
    kFactor: 32,      // Elo K-factor
    initialRating: 1500,
    timeDecay: 0.95   // Time-based decay factor
};
```

### Custom Categories
```javascript
// Add new category
rankEverything.addCategory({
    id: 'custom-category',
    name: 'Custom Category',
    icon: '🎯',
    items: [...]
});
```

### Event Handling
```javascript
// Listen for ranking events
document.addEventListener('rankingComplete', (event) => {
    console.log('Ranking completed:', event.detail);
});
```

## 🔧 Customization

### Adding New Categories

1. **Edit** `initializeCategories()` in `main.js`
2. **Add** category object with items array
3. **Include** icon, name, description, and color
4. **Items** need id, title, year, and metadata

### Modifying Ranking Algorithm

1. **Edit** `RankingAlgorithms` class
2. **Implement** new algorithm method
3. **Update** `calculateRankings()` to use new algorithm
4. **Test** with sample data

### Custom Styling

1. **Edit** CSS variables in `index.html` `<style>` section
2. **Modify** Tailwind classes for component styling
3. **Update** color scheme and typography
4. **Test** across different screen sizes

## 📊 Performance Optimization

### Lazy Loading
- Large datasets loaded progressively
- Images loaded on demand
- Charts rendered when visible

### Efficient Algorithms
- O(n log n) ranking calculations
- Optimized comparison selection
- Caching for repeated calculations

### Memory Management
- Cleanup of event listeners
- Efficient data structures
- Garbage collection friendly

## 🌐 Browser Support

### Modern Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced features with JavaScript enabled
- Graceful degradation for older browsers

## 🔒 Security Considerations

### Data Privacy
- No personal data collection
- Anonymous ranking sessions
- Local storage for preferences

### Input Validation
- Sanitized user inputs
- XSS prevention measures
- Content Security Policy ready

## 🚀 Deployment

### Static Hosting
Compatible with any static hosting service:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3**: Enterprise-grade hosting

### CDN Integration
All external libraries loaded from CDN:
- Tailwind CSS
- Anime.js
- ECharts.js
- Typed.js
- Splitting.js

## 🤝 Contributing

### Development Guidelines
1. **Fork** the repository
2. **Create** feature branch
3. **Implement** changes with tests
4. **Submit** pull request

### Code Style
- **ES6+ JavaScript**: Modern syntax
- **Semantic HTML**: Meaningful markup
- **BEM CSS**: Block Element Modifier naming
- **JSDoc Comments**: Function documentation

## 📈 Future Enhancements

### Planned Features
- **User Accounts**: Save rankings and preferences
- **Social Features**: Share rankings with friends
- **Advanced Analytics**: Detailed ranking insights
- **Mobile App**: Native iOS/Android applications
- **API**: RESTful API for developers

### Technical Improvements
- **Web Workers**: Background ranking calculations
- **Service Worker**: Offline functionality
- **Web Components**: Reusable UI components
- **PWA**: Progressive Web App features

## 📝 License

This project is created for educational and commercial use. All ranking algorithms and implementations are based on established mathematical models and open-source principles.

## 🙏 Acknowledgments

- **Elo Rating System**: Arpad Elo, chess rating pioneer
- **Bradley-Terry Model**: R.A. Bradley & M.E. Terry
- **ECharts Team**: For excellent visualization library
- **Anime.js**: For smooth animation capabilities

---

**RankEverything** - Where every opinion matters and every ranking tells a story.

Built with ❤️ for ranking enthusiasts everywhere.