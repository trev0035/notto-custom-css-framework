# NottoCSS Framework  

A futuristic and customizable CSS framework built with **Sass**. NottoCSS brings a modern design system with pre-styled items, utility classes, and responsive features to speed up web development.

## Features  
- Built using **Sass** with modular partials  
- Customizable **CSS variables** for themes and styles  
- Pre-styled HTML items including **headings, lists, buttons, forms, inputs, tables and responisve images**  
- Utility classes for **colors, font weights, font sizes, margins, paddings, and borders**  
- **Consistent and futuristic** theme across all elements  
- A compiled CSS version included  

---
## Installation

Clone the repository and include `notto.css` in your project:

```sh
 git clone https://github.com/trev0035/notto-css-framework.git
```

Include the compiled CSS file in your HTML:

```html
<link rel="stylesheet" href="css/notto.css">
```

## Usage

### **Buttons**
Use predefined button classes:

```html
<button class="btn notto-button-primary">Primary</button>
<button class="btn notto-button-secondary">Secondary</button>
<button class="btn notto-button-success">Success</button>
<button class="btn notto-button-info">Info</button>
<button class="btn notto-button-warning">Warning</button>
<button class="btn notto-button-danger">Danger</button>
```

Use an `<a>` element styled as a button:

```html
<a href="#" class="btn notto-button-primary">Primary Link</a>
```

### **Forms**
Styled form elements with `.notto-form`:

```html
<form class="notto-form">
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter your name">
  
  <button type="submit" class="btn notto-button-primary">Submit</button>
</form>
```

### **Tables**
Custom table styling:

```html
<table class="notto-table notto-table-bordered">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### **Spacing Utilities**
Apply **margin** and **padding** easily:

```html
<div class="notto-m-5 notto-p-3">This div has margin and padding utilities.</div>
```

**Directional margin & padding:**

```html
<div class="notto-mt-5">Top margin</div>
<div class="notto-pb-5">Bottom padding</div>
```

### **Borders & Radius**

```html
<div class="notto-border-primary">Primary Border</div>
<div class="notto-border-glow">Glowing Border</div>
<div class="notto-radius-lg">Large Rounded Corners</div>
```

### **Images**

```html
<img src="image.jpg" class="notto-img-responsive" alt="Responsive Image">
```

## Customization

Modify `_variables.scss` to change theme colors, typography, and spacing:

```scss
// Change primary color
$indigo: #4A90E2;
$theme: (
  "primary": $indigo,
  "secondary": $purple,
);
```

Then recompile the SCSS:

```sh
npx sass src/main.scss css/notto.css
```


## Author

Created by **Regina Trevs** | [GitHub Profile](https://github.com/trev0035)

