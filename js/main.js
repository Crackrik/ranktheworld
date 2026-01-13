// RankEverything - Main JavaScript File
// Universal Ranking Platform

class RankEverything {
    constructor() {
        this.currentCategory = null;
        this.currentPair = null;
        this.rankingProgress = 0;
        this.totalPairs = 10;
        this.userRankings = [];
        this.categories = this.initializeCategories();
        this.rankingAlgorithms = new RankingAlgorithms();
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.populateCategories();
        this.animateStats();
        this.setupSearch();
    }
    
    initializeCategories() {
        return {
            movies: {
                name: 'Movies',
                icon: '🎬',
                description: 'Rank movies from classics to modern blockbusters',
                color: 'from-purple-500 to-pink-500',
                items: [
                    { id: 1, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola', image: 'https://via.placeholder.com/300x200/2D1B69/FFFFFF?text=The+Godfather' },
                    { id: 2, title: 'Citizen Kane', year: 1941, director: 'Orson Welles', image: 'https://via.placeholder.com/300x200/1B692D/FFFFFF?text=Citizen+Kane' },
                    { id: 3, title: 'Casablanca', year: 1942, director: 'Michael Curtiz', image: 'https://via.placeholder.com/300x200/692D1B/FFFFFF?text=Casablanca' },
                    { id: 4, title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino', image: 'https://via.placeholder.com/300x200/2D691B/FFFFFF?text=Pulp+Fiction' },
                    { id: 5, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont', image: 'https://via.placeholder.com/300x200/1B2D69/FFFFFF?text=Shawshank' },
                    { id: 6, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan', image: 'https://via.placeholder.com/300x200/691B2D/FFFFFF?text=Dark+Knight' },
                    { id: 7, title: 'Schindler\'s List', year: 1993, director: 'Steven Spielberg', image: 'https://via.placeholder.com/300x200/2D6969/FFFFFF?text=Schindlers+List' },
                    { id: 8, title: 'Fight Club', year: 1999, director: 'David Fincher', image: 'https://via.placeholder.com/300x200/69692D/FFFFFF?text=Fight+Club' },
                    { id: 9, title: 'Forrest Gump', year: 1994, director: 'Robert Zemeckis', image: 'https://via.placeholder.com/300x200/692D69/FFFFFF?text=Forrest+Gump' },
                    { id: 10, title: 'Inception', year: 2010, director: 'Christopher Nolan', image: 'https://via.placeholder.com/300x200/1B6969/FFFFFF?text=Inception' }
                ]
            },
            music: {
                name: 'Music',
                icon: '🎵',
                description: 'Rank songs, albums, and artists across all genres',
                color: 'from-green-500 to-blue-500',
                items: [
                    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975, image: 'https://via.placeholder.com/300x200/1B692D/FFFFFF?text=Bohemian+Rhapsody' },
                    { id: 2, title: 'Imagine', artist: 'John Lennon', year: 1971, image: 'https://via.placeholder.com/300x200/2D1B69/FFFFFF?text=Imagine' },
                    { id: 3, title: 'Hotel California', artist: 'Eagles', year: 1976, image: 'https://via.placeholder.com/300x200/692D1B/FFFFFF?text=Hotel+California' },
                    { id: 4, title: 'Stairway to Heaven', artist: 'Led Zeppelin', year: 1971, image: 'https://via.placeholder.com/300x200/1B2D69/FFFFFF?text=Stairway+to+Heaven' },
                    { id: 5, title: 'Like a Rolling Stone', artist: 'Bob Dylan', year: 1965, image: 'https://via.placeholder.com/300x200/2D691B/FFFFFF?text=Like+a+Rolling+Stone' },
                    { id: 6, title: 'Hey Jude', artist: 'The Beatles', year: 1968, image: 'https://via.placeholder.com/300x200/691B2D/FFFFFF?text=Hey+Jude' },
                    { id: 7, title: 'Smells Like Teen Spirit', artist: 'Nirvana', year: 1991, image: 'https://via.placeholder.com/300x200/2D6969/FFFFFF?text=Smells+Like+Teen+Spirit' },
                    { id: 8, title: 'Billie Jean', artist: 'Michael Jackson', year: 1982, image: 'https://via.placeholder.com/300x200/69692D/FFFFFF?text=Billie+Jean' },
                    { id: 9, title: 'Purple Haze', artist: 'Jimi Hendrix', year: 1967, image: 'https://via.placeholder.com/300x200/692D69/FFFFFF?text=Purple+Haze' },
                    { id: 10, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', year: 1987, image: 'https://via.placeholder.com/300x200/1B6969/FFFFFF?text=Sweet+Child+O+Mine' }
                ]
            },
            books: {
                name: 'Books',
                icon: '📚',
                description: 'Rank novels, non-fiction, and literary works',
                color: 'from-amber-500 to-orange-500',
                items: [
                    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, image: 'https://via.placeholder.com/300x200/692D1B/FFFFFF?text=To+Kill+a+Mockingbird' },
                    { id: 2, title: '1984', author: 'George Orwell', year: 1949, image: 'https://via.placeholder.com/300x200/1B2D69/FFFFFF?text=1984' },
                    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, image: 'https://via.placeholder.com/300x200/2D691B/FFFFFF?text=Pride+and+Prejudice' },
                    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, image: 'https://via.placeholder.com/300x200/691B2D/FFFFFF?text=Great+Gatsby' },
                    { id: 5, title: 'Moby Dick', author: 'Herman Melville', year: 1851, image: 'https://via.placeholder.com/300x200/2D6969/FFFFFF?text=Moby+Dick' },
                    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', year: 1869, image: 'https://via.placeholder.com/300x200/69692D/FFFFFF?text=War+and+Peace' },
                    { id: 7, title: 'Ulysses', author: 'James Joyce', year: 1922, image: 'https://via.placeholder.com/300x200/692D69/FFFFFF?text=Ulysses' },
                    { id: 8, title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605, image: 'https://via.placeholder.com/300x200/1B6969/FFFFFF?text=Don+Quixote' },
                    { id: 9, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, image: 'https://via.placeholder.com/300x200/1B692D/FFFFFF?text=Catcher+in+the+Rye' },
                    { id: 10, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, image: 'https://via.placeholder.com/300x200/2D1B69/FFFFFF?text=Brave+New+World' }
                ]
            },
            games: {
                name: 'Video Games',
                icon: '🎮',
                description: 'Rank video games across all platforms and genres',
                color: 'from-purple-500 to-pink-500',
                items: [
                    { id: 1, title: 'The Legend of Zelda: Ocarina of Time', platform: 'Nintendo 64', year: 1998, image: 'https://via.placeholder.com/300x200/2D1B69/FFFFFF?text=Zelda+OOT' },
                    { id: 2, title: 'Super Mario 64', platform: 'Nintendo 64', year: 1996, image: 'https://via.placeholder.com/300x200/1B692D/FFFFFF?text=Super+Mario+64' },
                    { id: 3, title: 'Half-Life 2', platform: 'PC', year: 2004, image: 'https://via.placeholder.com/300x200/692D1B/FFFFFF?text=Half+Life+2' },
                    { id: 4, title: 'BioShock', platform: 'Multi-platform', year: 2007, image: 'https://via.placeholder.com/300x200/1B2D69/FFFFFF?text=BioShock' },
                    { id: 5, title: 'Portal 2', platform: 'Multi-platform', year: 2011, image: 'https://via.placeholder.com/300x200/2D691B/FFFFFF?text=Portal+2' },
                    { id: 6, title: 'Red Dead Redemption 2', platform: 'Multi-platform', year: 2018, image: 'https://via.placeholder.com/300x200/691B2D/FFFFFF?text=Red+Dead+2' },
                    { id: 7, title: 'The Witcher 3: Wild Hunt', platform: 'Multi-platform', year: 2015, image: 'https://via.placeholder.com/300x200/2D6969/FFFFFF?text=Witcher+3' },
                    { id: 8, title: 'Dark Souls', platform: 'Multi-platform', year: 2011, image: 'https://via.placeholder.com/300x200/69692D/FFFFFF?text=Dark+Souls' },
                    { id: 9, title: 'Minecraft', platform: 'Multi-platform', year: 2011, image: 'https://via.placeholder.com/300x200/692D69/FFFFFF?text=Minecraft' },
                    { id: 10, title: 'Grand Theft Auto V', platform: 'Multi-platform', year: 2013, image: 'https://via.placeholder.com/300x200/1B6969/FFFFFF?text=GTA+V' }
                ]
            }
        };
    }
    
    setupEventListeners() {
        // Global search
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startRanking();
                }
            });
        }
        
        // Category cards
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-card')) {
                const categoryId = e.target.closest('.category-card').dataset.category;
                this.selectCategory(categoryId);
            }
        });
    }
    
    initializeAnimations() {
        // Typed.js for hero text
        if (document.getElementById('typed-text')) {
            new Typed('#typed-text', {
                strings: [
                    'Rank Everything',
                    'Rank Movies',
                    'Rank Music', 
                    'Rank Books',
                    'Rank Games',
                    'Rank Anything'
                ],
                typeSpeed: 80,
                backSpeed: 60,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
        
        // Animate stats counters
        this.animateCounters();
        
        // Scroll animations
        this.setupScrollAnimations();
    }
    
    animateCounters() {
        const counters = [
            { id: 'total-rankings', target: 15420, duration: 2000 },
            { id: 'active-users', target: 8934, duration: 2000 },
            { id: 'categories', target: 156, duration: 1500 },
            { id: 'items-ranked', target: 284750, duration: 2500 }
        ];
        
        counters.forEach(counter => {
            const element = document.getElementById(counter.id);
            if (element) {
                anime({
                    targets: { count: 0 },
                    count: counter.target,
                    duration: counter.duration,
                    easing: 'easeOutQuart',
                    update: function(anim) {
                        element.textContent = Math.floor(anim.animatables[0].target.count).toLocaleString();
                    }
                });
            }
        });
    }
    
    setupScrollAnimations() {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for scroll animation
        document.querySelectorAll('.stats-card, .category-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    populateCategories() {
        const categoriesGrid = document.getElementById('categories-grid');
        if (!categoriesGrid) return;
        
        Object.entries(this.categories).forEach(([id, category]) => {
            const card = document.createElement('div');
            card.className = 'category-card p-6 rounded-2xl text-center cursor-pointer';
            card.dataset.category = id;
            
            card.innerHTML = `
                <div class="text-4xl mb-3 floating-element">${category.icon}</div>
                <h3 class="text-lg font-bold text-slate-800 mb-2">${category.name}</h3>
                <p class="text-sm text-slate-600 mb-3">${category.description}</p>
                <div class="text-xs text-slate-500">${category.items.length} items to rank</div>
            `;
            
            categoriesGrid.appendChild(card);
        });
        
        // Animate category cards
        anime({
            targets: '.category-card',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuart'
        });
    }
    
    animateStats() {
        // Add floating animation to stats cards
        anime({
            targets: '.stats-card',
            translateY: [0, -5, 0],
            duration: 3000,
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(200)
        });
    }
    
    setupSearch() {
        const searchInput = document.getElementById('global-search');
        if (!searchInput) return;
        
        // Add search suggestions (mock implementation)
        searchInput.addEventListener('focus', () => {
            this.showSearchSuggestions();
        });
    }
    
    showSearchSuggestions() {
        // Mock search suggestions
        console.log('Showing search suggestions...');
    }
    
    handleSearch(query) {
        if (query.length < 2) return;
        
        // Mock search functionality
        console.log('Searching for:', query);
        
        // In a real app, this would fetch search results
        // and show relevant categories or items
    }
    
    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        const category = this.categories[categoryId];
        
        if (!category) return;
        
        // Update ranking section
        document.getElementById('category-title').textContent = `Rank ${category.name}`;
        document.getElementById('category-description').textContent = category.description;
        
        // Show ranking section
        document.getElementById('browse').classList.add('hidden');
        document.getElementById('ranking-section').classList.remove('hidden');
        
        // Initialize ranking
        this.startRanking();
        
        // Smooth scroll to ranking section
        document.getElementById('ranking-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    
    startRanking() {
        if (!this.currentCategory) return;
        
        this.rankingProgress = 0;
        this.userRankings = [];
        this.totalPairs = Math.min(10, this.categories[this.currentCategory].items.length);
        
        this.updateProgress();
        this.showNextPair();
    }
    
    showNextPair() {
        if (this.rankingProgress >= this.totalPairs) {
            this.completeRanking();
            return;
        }
        
        const items = this.categories[this.currentCategory].items;
        const availableItems = items.filter(item => 
            !this.userRankings.some(ranking => 
                ranking.winner === item.id || ranking.loser === item.id
            )
        );
        
        if (availableItems.length < 2) {
            this.completeRanking();
            return;
        }
        
        // Select two random items
        const shuffled = [...availableItems].sort(() => 0.5 - Math.random());
        const itemA = shuffled[0];
        const itemB = shuffled[1];
        
        this.currentPair = { a: itemA, b: itemB };
        
        // Update UI
        this.updatePairDisplay(itemA, itemB);
        this.rankingProgress++;
        this.updateProgress();
    }
    
    updatePairDisplay(itemA, itemB) {
        // Update item A
        document.getElementById('item-a-title').textContent = itemA.title;
        document.getElementById('item-a-description').textContent = 
            `${itemA.year} • ${itemA.director || itemA.artist || itemA.author || itemA.platform}`;
        document.getElementById('item-a-image').src = itemA.image;
        document.getElementById('item-a-image').alt = itemA.title;
        
        // Update item B
        document.getElementById('item-b-title').textContent = itemB.title;
        document.getElementById('item-b-description').textContent = 
            `${itemB.year} • ${itemB.director || itemB.artist || itemB.author || itemB.platform}`;
        document.getElementById('item-b-image').src = itemB.image;
        document.getElementById('item-b-image').alt = itemB.title;
        
        // Reset card states
        document.getElementById('item-a').classList.remove('selected');
        document.getElementById('item-b').classList.remove('selected');
        
        // Animate cards
        anime({
            targets: ['#item-a', '#item-b'],
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });
    }
    
    updateProgress() {
        const progressPercent = (this.rankingProgress / this.totalPairs) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
        document.getElementById('progress-text').textContent = `${this.rankingProgress} of ${this.totalPairs}`;
    }
    
    selectItem(winner) {
        if (!this.currentPair) return;
        
        const winnerItem = winner === 'a' ? this.currentPair.a : this.currentPair.b;
        const loserItem = winner === 'a' ? this.currentPair.b : this.currentPair.a;
        
        // Record ranking
        this.userRankings.push({
            winner: winnerItem.id,
            loser: loserItem.id,
            winnerScore: this.calculateScore(winnerItem),
            loserScore: this.calculateScore(loserItem),
            timestamp: Date.now()
        });
        
        // Visual feedback
        const winnerCard = document.getElementById(`item-${winner}`);
        winnerCard.classList.add('selected');
        
        // Animate selection
        anime({
            targets: winnerCard,
            scale: [1, 1.05, 1],
            duration: 300,
            easing: 'easeOutQuart'
        });
        
        // Show next pair after delay
        setTimeout(() => {
            this.showNextPair();
        }, 800);
    }
    
    calculateScore(item) {
        // Mock scoring algorithm
        return Math.random() * 100 + 50;
    }
    
    skipPair() {
        this.rankingProgress++;
        this.updateProgress();
        this.showNextPair();
    }
    
    dontKnow() {
        // Record as uncertain
        this.userRankings.push({
            uncertain: true,
            itemA: this.currentPair.a.id,
            itemB: this.currentPair.b.id,
            timestamp: Date.now()
        });
        
        this.showNextPair();
    }
    
    completeRanking() {
        // Calculate final rankings
        const rankings = this.rankingAlgorithms.calculateEloRankings(
            this.userRankings,
            this.categories[this.currentCategory].items
        );
        
        // Show results
        this.displayResults(rankings);
        
        // Hide ranking section, show results
        document.getElementById('ranking-section').classList.add('hidden');
        document.getElementById('results-section').classList.remove('hidden');
        
        // Scroll to results
        document.getElementById('results-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    
    displayResults(rankings) {
        const resultsList = document.getElementById('rankings-list');
        const category = this.categories[this.currentCategory];
        
        // Update results title
        document.getElementById('results-title').textContent = `Top ${category.name}`;
        
        // Clear previous results
        resultsList.innerHTML = '';
        
        // Display top 20
        rankings.slice(0, 20).forEach((ranking, index) => {
            const item = category.items.find(i => i.id === ranking.id);
            if (!item) return;
            
            const rankingItem = document.createElement('div');
            rankingItem.className = 'flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors';
            rankingItem.innerHTML = `
                <div class="text-2xl font-bold text-slate-400 w-8">${index + 1}</div>
                <img src="${item.image}" alt="${item.title}" class="w-16 h-16 rounded-lg object-cover">
                <div class="flex-1">
                    <h4 class="font-bold text-slate-800">${item.title}</h4>
                    <p class="text-sm text-slate-600">${item.year} • ${item.director || item.artist || item.author || item.platform}</p>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold text-orange-500">${ranking.score.toFixed(0)}</div>
                    <div class="text-xs text-slate-500">points</div>
                </div>
            `;
            
            resultsList.appendChild(rankingItem);
        });
        
        // Create chart
        this.createRankingChart(rankings.slice(0, 10));
        
        // Update statistics
        this.updateStatistics();
    }
    
    createRankingChart(rankings) {
        const chartDom = document.getElementById('ranking-chart');
        const myChart = echarts.init(chartDom);
        
        const category = this.categories[this.currentCategory];
        const items = rankings.map(r => {
            const item = category.items.find(i => i.id === r.id);
            return item ? item.title : 'Unknown';
        });
        const scores = rankings.map(r => r.score);
        
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    color: '#64748b'
                }
            },
            yAxis: {
                type: 'category',
                data: items.reverse(),
                axisLabel: {
                    color: '#64748b'
                }
            },
            series: [{
                name: 'Score',
                type: 'bar',
                data: scores.reverse(),
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#f97316' },
                        { offset: 1, color: '#3b82f6' }
                    ])
                }
            }]
        };
        
        myChart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', () => {
            myChart.resize();
        });
    }
    
    updateStatistics() {
        const totalVotes = this.userRankings.filter(r => !r.uncertain).length;
        const participants = Math.floor(Math.random() * 1000) + 100;
        const confidence = Math.floor(Math.random() * 30) + 70;
        
        document.getElementById('total-votes').textContent = totalVotes.toLocaleString();
        document.getElementById('participants').textContent = participants.toLocaleString();
        document.getElementById('confidence').textContent = `${confidence}%`;
        document.getElementById('ranking-method').textContent = 'Elo';
    }
    
    viewResults() {
        if (this.userRankings.length === 0) {
            alert('Please complete some rankings first!');
            return;
        }
        
        this.completeRanking();
    }
}

// Ranking Algorithms Class
class RankingAlgorithms {
    constructor() {
        this.kFactor = 32; // Elo K-factor
        this.initialRating = 1500;
    }
    
    calculateEloRankings(comparisons, items) {
        // Initialize ratings
        const ratings = {};
        items.forEach(item => {
            ratings[item.id] = this.initialRating;
        });
        
        // Process each comparison
        comparisons.forEach(comparison => {
            if (comparison.uncertain) return;
            
            const winner = comparison.winner;
            const loser = comparison.loser;
            
            const winnerRating = ratings[winner];
            const loserRating = ratings[loser];
            
            // Calculate expected scores
            const winnerExpected = this.expectedScore(winnerRating, loserRating);
            const loserExpected = this.expectedScore(loserRating, winnerRating);
            
            // Update ratings
            ratings[winner] = winnerRating + this.kFactor * (1 - winnerExpected);
            ratings[loser] = loserRating + this.kFactor * (0 - loserExpected);
        });
        
        // Convert to sorted array
        return items
            .map(item => ({
                id: item.id,
                score: ratings[item.id] || this.initialRating
            }))
            .sort((a, b) => b.score - a.score);
    }
    
    expectedScore(ratingA, ratingB) {
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }
    
    calculateBradleyTerryRankings(comparisons, items) {
        // Implementation of Bradley-Terry model
        // This is a simplified version
        const ratings = {};
        items.forEach(item => {
            ratings[item.id] = 1.0; // Initial rating
        });
        
        // Iterative refinement (simplified)
        for (let iteration = 0; iteration < 10; iteration++) {
            const newRatings = {};
            
            items.forEach(item => {
                let sum = 0;
                let count = 0;
                
                comparisons.forEach(comp => {
                    if (comp.uncertain) return;
                    
                    if (comp.winner === item.id) {
                        sum += 1.0 / (1.0 + Math.exp(-(ratings[item.id] - ratings[comp.loser])));
                        count++;
                    } else if (comp.loser === item.id) {
                        sum += 0.0;
                        count++;
                    }
                });
                
                newRatings[item.id] = count > 0 ? sum / count : ratings[item.id];
            });
            
            Object.assign(ratings, newRatings);
        }
        
        return items
            .map(item => ({
                id: item.id,
                score: ratings[item.id] * 1000 // Scale for display
            }))
            .sort((a, b) => b.score - a.score);
    }
}

// Global functions for button clicks
function selectItem(winner) {
    if (window.rankEverything) {
        window.rankEverything.selectItem(winner);
    }
}

function skipPair() {
    if (window.rankEverything) {
        window.rankEverything.skipPair();
    }
}

function dontKnow() {
    if (window.rankEverything) {
        window.rankEverything.dontKnow();
    }
}

function viewResults() {
    if (window.rankEverything) {
        window.rankEverything.viewResults();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.rankEverything = new RankEverything();
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-based navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-orange-500');
            link.classList.add('text-slate-600');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-slate-600');
                link.classList.add('text-orange-500');
            }
        });
    });
});