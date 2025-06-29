# Design Guide - Intip Nilai Anak UNRI

## Design Philosophy

Website ini menggunakan pendekatan **minimalis modern** dengan elemen **cartoon/ilustrasi** yang friendly dan menarik. Desain fokus pada kemudahan penggunaan dengan visual yang menyenangkan.

## Color Palette

### Primary Colors
- **Orange Primary**: `#FFA673` - Warna utama yang menonjol
- **Orange Secondary**: `#FF8A50` - Warna pendukung
- **Orange Accent**: `#FF6B35` - Warna aksen

### Neutral Colors
- **Dark Text**: `#2D3748` - Untuk teks utama
- **Light Text**: `#718096` - Untuk teks sekunder
- **Background**: `#FFFFFF` dengan transparansi
- **Light Gray**: `#E2E8F0` - Untuk border dan elemen subtle

## Typography

### Font Family
```css
font-family: 'Poppins', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Weights
- **Light**: 300 - Untuk heading besar
- **Regular**: 400 - Untuk teks biasa
- **Medium**: 500 - Untuk label
- **Semibold**: 600 - Untuk button dan emphasis
- **Bold**: 700 - Untuk heading
- **Extrabold**: 800 - Untuk title utama

## Layout & Spacing

### Container
- Full height viewport dengan flexbox
- No cards atau container terpisah
- Background gradient full screen

### Spacing Scale
- **Small**: 8px, 10px, 12px, 15px
- **Medium**: 20px, 25px, 30px
- **Large**: 40px, 50px
- **Extra Large**: 60px, 80px

### Header Specifications
- **Padding**: 30px 20px (desktop), 25px 15px (tablet), 20px 15px (mobile)
- **Icon Size**: 60px (desktop), 50px (tablet), 45px (mobile)
- **Title Size**: 2.2rem (desktop), 1.8rem (tablet), 1.6rem (mobile)

## Components

### Header
- Gradient background dengan backdrop-filter
- Icon dalam circle dengan gradient
- Typography dengan gradient text
- Floating animation elements

### Form
- Rounded corners (20px)
- Backdrop-filter blur effect
- Smooth animations dengan stagger
- Focus states dengan transform dan shadow

### Buttons
- Gradient backgrounds
- Rounded corners (20px-25px)
- Hover effects dengan transform
- Shimmer effect pada primary button

### PDF Viewer
- Rounded container dengan backdrop-filter
- Control buttons dengan gradient
- Smooth zoom dan navigation
- Loading states dengan spin animation

## Animations

### Keyframes
```css
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Animation Timing
- **Duration**: 0.3s untuk interactions, 0.6s untuk page load
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` untuk smooth feel
- **Stagger**: 0.1s delay antar elemen

## Visual Effects

### Backdrop Filter
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.95);
```

### Gradients
```css
/* Primary Gradient */
background: linear-gradient(135deg, #FFA673 0%, #FF8A50 100%);

/* Background Gradient */
background: linear-gradient(135deg, #FFA673 0%, #FF8A50 50%, #FF6B35 100%);
```

### Shadows
```css
/* Soft Shadow */
box-shadow: 0 10px 30px rgba(255, 166, 115, 0.4);

/* Strong Shadow */
box-shadow: 0 15px 40px rgba(255, 166, 115, 0.5);
```

## Responsive Design

### Breakpoints
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 768px
- **Desktop**: 769px+

### Mobile Adaptations
- Reduced padding dan margins
- Stacked button layouts
- Smaller font sizes
- Hidden decorative elements

## Accessibility

### Focus States
- Clear focus indicators dengan outline
- High contrast colors
- Keyboard navigation support

### Color Contrast
- Text colors meet WCAG AA standards
- Interactive elements have sufficient contrast

## Browser Support

### Modern Features Used
- CSS Grid dan Flexbox
- Backdrop-filter (dengan fallback)
- CSS Custom Properties
- CSS Animations

### Fallbacks
- Gradient fallbacks untuk older browsers
- Alternative layouts tanpa backdrop-filter

## File Structure

```
public/
├── style.css          # Main stylesheet
├── script.js          # Client-side interactions
└── icon.png           # Custom icon

views/
├── index.ejs          # Homepage template
└── result.ejs         # Results page template
```

## Best Practices

1. **Performance**: Minimal CSS, optimized animations
2. **Maintainability**: Consistent naming conventions
3. **Scalability**: Modular component approach
4. **User Experience**: Smooth interactions, clear feedback
5. **Accessibility**: Semantic HTML, proper contrast
