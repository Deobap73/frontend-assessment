# 🧪 Frontend Developer Test – Product Card UI

This repository contains the implementation of the **Frontend Developer** test based on an e-commerce project.  
The goal was to create a **responsive Product Card component** using mock product data, following UI/UX best practices.

---

## 📋 Test requirements

- [x] **Product image**
- [x] **Product name**
- [x] **Product price**
- [x] **Variant options** (dropdown when more than one variant, label when only one)
- [x] **“Add to Cart” button**
- [x] Button disabled or replaced with “Out of Stock” when unavailable
- [x] Clean and modern layout
- [x] Responsive design

---

## 🖥️ Technologies used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- SCSS for styling
- [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) for currency formatting

---

## 📦 Installation & running locally

```bash
# Clone this repository
git clone https://github.com/YOUR-USERNAME/frontend-assessment.git

# Navigate to the project folder
cd frontend-assessment

# Install dependencies
npm install

# Start the development server
npm run dev
The project will be available at:
```


📸 Screenshot
<br> <br>
<img src="https://github.com/Deobap73/frontend-assessment/blob/18e4e1664e8bb2a40d670a69bd8f9fc458463e12/src/assets/Screenshot%202025-08-08%20153204.png">
<br> <br>

📄 Implementation notes
The ProductCard is a reusable and accessible component, featuring:

Lazy-loaded images for better performance

Variant control with a dropdown or label depending on the number of options

Visual state for out-of-stock products

Flexible layout using CSS Grid with responsive adjustments via media queries



✍️ Author
Developed by [_Deolindo Baptista_](https://github.com/Deobap73) for the Frontend Developer Test.
```
