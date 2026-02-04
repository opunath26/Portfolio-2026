# Apu Nath Portfolio - React with Professional Animations

This is a highly interactive React.js portfolio website featuring **professional animations** including a custom cursor with lag effect, floating images, magnetic buttons, and smooth image reveals.

## ✨ **Professional Animation Features**

### **1. Professional Custom Cursor** 🎯
- **Pink Dot + Ring Design**: Small elegant pink dot with larger transparent ring
- **Premium Lag Effect**: Ring follows with smooth delay for professional feel
- **Interactive Scaling**: Both elements scale up when hovering over buttons/links
- **Smart Detection**: Only active on desktop devices with hover support
- **Proper Fallback**: Default cursor remains visible until custom cursor is ready

### **2. Floating Image Effect** 🌊
- **Hero Section**: Profile image has continuous floating/bobbing animation
- **About Section**: Portrait image floats with reduced intensity (0.8x)
- **GSAP Powered**: Smooth Y-axis movement with subtle rotation
- **Customizable Intensity**: Different floating strengths for different sections

### **3. Image Reveal Animations** 📸
- **Framer Motion**: Images scale up (0.8 → 1.0) and fade in when entering viewport
- **Project Cards**: Stagger reveal with 0.2s delays between cards
- **Portrait Images**: Smooth scale and fade animations
- **Performance Optimized**: Uses `once: true` triggers

### **4. Enhanced Magnetic Buttons** 🧲
- **"Let's Talk" Button**: Stronger magnetic effect (0.6x multiplier)
- **"Send Message" Button**: Enhanced magnetic attraction
- **All Other Buttons**: Standard magnetic effect (0.4x multiplier)
- **Elastic Return**: Smooth bounce-back when mouse leaves

### **5. Clean Layout** 📐
- **No Horizontal Scroll**: Proper overflow handling
- **Responsive Design**: Perfect spacing on all devices
- **Optimized Performance**: Smooth 60fps animations
- **Professional Polish**: Clean, elegant interactions

## 🚀 **Key Components**

### **CustomCursor**
```jsx
<CustomCursor />
```
- **Dot**: 8px pink circle that follows mouse immediately
- **Ring**: 32px transparent ring with 0.15s lag
- **Hover Effects**: Both scale up on interactive elements
- **Device Detection**: Only shows on desktop with hover support

### **FloatingImage**
```jsx
<FloatingImage intensity={1} className="...">
  <img src="..." />
</FloatingImage>
```
- GSAP continuous animation
- Customizable intensity (0.8 for subtle, 1+ for stronger)
- Y-axis movement with rotation

### **ImageReveal**
```jsx
<ImageReveal delay={0.2} className="...">
  <img src="..." />
</ImageReveal>
```
- Framer Motion scale and fade animation
- Viewport-triggered with `useInView`
- Customizable delay for stagger effects

### **Enhanced MagneticButton**
```jsx
<MagneticButton isSpecial={true} className="...">
  Button Content
</MagneticButton>
```
- `isSpecial={true}` for stronger magnetic effect
- GSAP mouse tracking with elastic return
- Smooth physics simulation

## 📦 **Installation & Setup**

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Quick Start
```bash
# Install dependencies (already included)
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🎨 **Animation Specifications**

### **Custom Cursor**
- **Dot Size**: 8px circle
- **Ring Size**: 32px with 1px border
- **Colors**: Primary pink (#FF2E63)
- **Lag Effect**: Ring follows with 0.15s delay
- **Hover Scale**: Dot 2x, Ring 1.5x
- **Click Effect**: Both scale to 0.8x

### **Floating Images**
- **Movement**: -20px Y-axis (customizable with intensity)
- **Duration**: 3s with yoyo repeat
- **Rotation**: ±2 degrees with 4s duration
- **Easing**: power2.inOut for natural movement

### **Image Reveals**
- **Scale**: 0.8 to 1.0
- **Opacity**: 0 to 1
- **Duration**: 0.8s
- **Trigger**: -50px margin from viewport
- **Easing**: Custom cubic-bezier

### **Magnetic Buttons**
- **Regular**: 0.4x mouse position multiplier
- **Special**: 0.6x mouse position multiplier
- **Return**: Elastic ease with 0.5s duration
- **Tracking**: 0.3s duration with power2.out

## 🔧 **Technologies Used**

- **React.js** - Component-based UI framework
- **Framer Motion** - Production-ready motion library
  - `useInView` - Viewport detection
- **GSAP** - Professional animation library
  - ScrollTrigger - Scroll-based animations
  - Timeline animations
  - Physics simulations
- **Tailwind CSS** - Utility-first styling

## 📱 **Performance Optimizations**

### **Efficient Animations**
- `will-change` properties for GPU acceleration
- `once: true` for single-trigger animations
- Proper cleanup of event listeners
- Smart device detection for cursor

### **Smooth Rendering**
- 60fps cursor tracking
- Hardware-accelerated transforms
- Optimized DOM queries
- Minimal re-renders with proper dependencies

### **Responsive Design**
- Custom cursor only on desktop
- Touch-friendly interactions
- No horizontal scroll issues
- Performance-first approach

## 🎯 **Animation Timing Sequence**

1. **Page Load**: Header slides down, cursor initializes (desktop only)
2. **Section Entry**: Each section fades in with slide-up animation
3. **Image Reveals**: Images scale and fade in when entering viewport
4. **Floating Effects**: Continuous subtle movement on hero/about images
5. **Skill Bars**: Stagger animation when skills section is in view
6. **Magnetic Interactions**: Buttons respond to mouse movement
7. **Cursor Feedback**: Cursor scales on hover over interactive elements

## 🎨 **Customization Guide**

### **Adjust Cursor Lag**
```jsx
// In CustomCursor component
duration: 0.2, // Increase for more lag
```

### **Modify Floating Intensity**
```jsx
<FloatingImage intensity={1.5}> // Stronger floating
<FloatingImage intensity={0.5}> // Subtle floating
```

### **Change Magnetic Strength**
```jsx
// In MagneticButton component
const multiplier = isSpecial ? 0.8 : 0.4; // Increase for stronger effect
```

### **Adjust Cursor Size**
```css
.cursor-dot {
  width: 10px; /* Change from 8px */
  height: 10px;
}

.cursor-ring {
  width: 40px; /* Change from 32px */
  height: 40px;
}
```

## 🔧 **Browser Support**

- **Chrome/Edge**: Full support with hardware acceleration
- **Firefox**: Full support with optimized performance
- **Safari**: Full support with WebKit optimizations
- **Mobile**: Cursor disabled, other animations optimized

## 📞 **Contact**

For questions about the professional animation implementation:
- **Email**: aputhecoder26@gmail.com
- **Portfolio**: [Live Demo](#)

---

*This portfolio showcases professional web animation techniques with a focus on performance, elegance, and user experience.*