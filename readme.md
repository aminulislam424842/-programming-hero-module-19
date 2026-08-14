# 🚀 Programming Hero — Module 19 | Array & Object Method Mastery

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Programming Hero](https://img.shields.io/badge/Programming%20Hero-Module%2019-blue?style=for-the-badge)
![Problem Solving](https://img.shields.io/badge/Practice-Problem%20Solving-success?style=for-the-badge)
![Tasks](https://img.shields.io/badge/Tasks-32-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

**JavaScript Array Methods, Object Methods, Callbacks & Data Processing**

</div>

---

## 📌 About This Repository

This repository contains my **Programming Hero — Module 19: Array & Object Method Mastery** practice tasks.

The main purpose of this module was to build fluency with JavaScript's built-in array and object methods through repeated, deliberate practice.

Throughout these 32 tasks, I practiced `map()`, `filter()`, `reduce()`, `find()`, `forEach()`, `sort()`, `Object.keys()`, `Object.values()`, `Object.entries()`, destructuring, callbacks, and immutability patterns.

This module helped me stop writing manual loops for every array problem and instead think in terms of transformation, filtering, and reduction — the way real-world JavaScript is actually written.

---

# 🎯 Learning Objectives

Through this module, I focused on:

- Mastering core array methods (`map`, `filter`, `reduce`, `find`, `forEach`, `sort`)
- Reading and writing data with `Object.keys()`, `Object.values()`, `Object.entries()`
- Writing and passing callback functions
- Chaining array methods together
- Practicing destructuring inside functions
- Avoiding array/object mutation using spread
- Processing arrays of objects (users, products, students)
- Building small data reports by combining multiple methods
- Thinking in terms of transformation instead of manual loops
- Writing clean and predictable JavaScript

---

# 📚 Tasks Covered

| # | Task | Main Concept |
|---|------|--------------|
| 01 | Bulk Discount Applier | `map()` |
| 02 | Passing Students Filter | `filter()` |
| 03 | Adult Users | `filter()` |
| 04 | Double Numbers | `map()` |
| 05 | Uppercase Names | `map()` |
| 06 | User Lookup | `find()` |
| 07 | Total Cart Price | `reduce()` |
| 08 | Highest Mark | `reduce()` |
| 09 | Lowest Price | `reduce()` |
| 10 | Product Names | `map()` |
| 11 | Even Numbers | `filter()` |
| 12 | Count Products | `filter()` + length |
| 13 | Find Laptop | `find()` |
| 14 | Add VAT | `map()` |
| 15 | Active Users | `filter()` |
| 16 | Filtered Cart Total | `filter()` + `reduce()` |
| 17 | Discounted Cart | `map()` + `reduce()` |
| 18 | Top Student | `reduce()` |
| 19 | Search Product | `find()` |
| 20 | Premium Customers | `filter()` |
| 21 | Name List | `map()` |
| 22 | Shopping Summary | `reduce()` + destructuring |
| 23 | Available Products | `filter()` |
| 24 | Final Price List | `map()` + `reduce()` |
| 25 | Eligible Students | `filter()` |
| 26 | Assignment Counter | `reduce()` |
| 27 | Callback Calculator | Callback Function |
| 28 | Sort Students | `sort()` |
| 29 | Mutation Fix | Spread (Immutability) |
| 30 | Complete E-Commerce Report | `map` + `filter` + `reduce` |
| 31 | Product Report | `map` + `filter` + `reduce` |
| 32 | Student Result Analyzer | `map` + `filter` + `reduce` |

---

# 🧩 Detailed Practice Areas

## 1. Array Transformation — `map()`

Practiced transforming every element of an array into a new form without touching the original array.

Examples included:

- Applying bulk discounts to prices
- Doubling numbers
- Converting names to uppercase
- Adding VAT to product prices
- Building new arrays of product/user names

---

## 2. Array Filtering — `filter()`

Practiced extracting a subset of data based on a condition.

Examples included:

- Passing students filter
- Adult users filter
- Active users filter
- Premium customers filter
- Filtering even numbers and available products

---

## 3. Array Reduction — `reduce()`

Practiced collapsing an array into a single value — a total, a maximum, a summary object.

Examples included:

- Total cart price
- Highest mark / lowest price
- Top student calculation
- Assignment counter
- Shopping summary with destructuring

---

## 4. Searching — `find()`

Practiced locating a single matching item inside an array of objects.

Examples included:

- User lookup by ID
- Finding a specific laptop
- Searching a product by name

---

## 5. Sorting — `sort()`

Practiced ordering arrays of objects based on a property, and understanding how comparator functions control the order.

Examples included:

- Sorting students by marks

---

## 6. Object Methods

Practiced reading data out of objects in different shapes.

Topics included:

```javascript
Object.keys()
Object.values()
Object.entries()
```

---

## 7. Callbacks & Immutability

Practiced writing custom callback functions and avoiding accidental mutation.

Examples included:

- Callback calculator (passing a function as an argument)
- Mutation fix using the spread operator to copy instead of mutate

---

## 8. Combined Method Chains

Practiced solving larger, realistic problems by chaining multiple array methods together in a single task.

```text
map()  →  transform
filter() →  narrow down
reduce() →  summarize
```

Used in:

- Complete E-Commerce Report
- Product Report
- Student Result Analyzer

---

# 🔥 Patterns Practiced

## Filter → Reduce Pipeline

```text
Start with raw array
        ↓
filter()  → keep only relevant items
        ↓
reduce()  → collapse into a single total
        ↓
Final Result
```

---

## Map → Reduce Pipeline

```text
Start with raw array
        ↓
map()     → transform each item (e.g. apply discount)
        ↓
reduce()  → sum the transformed values
        ↓
Final Total
```

---

## Immutability with Spread

```text
Original Array/Object
        ↓
Copy using { ...obj } or [ ...arr ]
        ↓
Modify the copy
        ↓
Original stays unchanged
```

---

# 🧠 Problem-Solving Workflow

For each problem, I followed a structured approach:

```text
Understand the Data Shape (array, object, array of objects)
        ↓
Identify the Right Method (map / filter / reduce / find / sort)
        ↓
Write the Callback Logic
        ↓
Test with the Given Sample Data
        ↓
Check for Edge Cases (empty array, no match, single item)
        ↓
Refactor for Readability
```

---

# 📂 Repository Structure

```text
programming-hero-module-19/
│
├── 19-01-bulk-discount-applier.js
├── 19-02-passing-students-filter.js
├── 19-03-adult-users.js
├── 19-04-double-numbers.js
├── 19-05-uppercase-names.js
├── 19-06-user-lookup.js
├── 19-07-total-cart-price.js
├── 19-08-highest-mark.js
├── 19-09-lowest-price.js
├── 19-10-product-names.js
├── 19-11-even-numbers.js
├── 19-12-count-products.js
├── 19-13-find-laptop.js
├── 19-14-add-vat.js
├── 19-15-active-users.js
├── 19-16-filtered-cart-total.js
├── 19-17-discounted-cart.js
├── 19-18-top-student.js
├── 19-19-search-product.js
├── 19-20-premium-customers.js
├── 19-21-name-list.js
├── 19-22-shopping-summary.js
├── 19-23-available-products.js
├── 19-24-final-price-list.js
├── 19-25-eligible-students.js
├── 19-26-assignment-counter.js
├── 19-27-callback-calculator.js
├── 19-28-sort-students.js
├── 19-29-mutation-fix.js
├── 19-30-complete-ecommerce-report.js
├── 19-31-product-report.js
├── 19-32-student-result-analyzer.js
│
└── README.md
```

---

# 🛠️ Technologies Used

- **JavaScript**
- **ES6+**
- **Node.js**
- **VS Code**
- **Git**
- **GitHub**

---

# ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/aminulislam424842/-programming-hero-module-19.git
```

### 2. Navigate to the repository

```bash
cd -programming-hero-module-19
```

### 3. Run any JavaScript file

```bash
node 19-01-bulk-discount-applier.js
```

Example:

```bash
node 19-32-student-result-analyzer.js
```

---

# 📈 Learning Progress

```text
Programming Hero — Module 19
│
├── map()                             ✅
├── filter()                          ✅
├── reduce()                          ✅
├── find()                            ✅
├── forEach()                         ✅
├── sort()                            ✅
├── Object.keys()                     ✅
├── Object.values()                   ✅
├── Object.entries()                  ✅
├── Destructuring                     ✅
├── Callback Functions                ✅
├── Spread / Immutability             ✅
├── Method Chaining                   ✅
├── Data Report Building              ✅
└── Problem Solving                   ✅
```

---

# 💡 Key Learnings

This module significantly improved my ability to work with real-world data using JavaScript.

### I learned how to:

- Replace manual loops with the right array method
- Transform data cleanly using `map()`
- Narrow down data sets using `filter()`
- Summarize data into totals and reports using `reduce()`
- Search arrays of objects efficiently with `find()`
- Sort data using custom comparator functions
- Read object data safely with `Object.keys/values/entries`
- Write and pass callback functions
- Avoid mutating original arrays and objects
- Chain multiple methods together to solve bigger problems
- Build complete data reports (e-commerce, student results) from raw arrays

---

# 🧪 Testing Approach

I practiced testing solutions with different types of inputs:

```text
Normal Input
     ↓
Expected Input
     ↓
Empty Array
     ↓
No Match Found
     ↓
Single Item Array
     ↓
Final Solution
```

Testing different scenarios helped me confirm each method behaved correctly across edge cases, not just the happy path.

---

# 🚀 What's Next?

After completing this module, I will continue building on these array/object method skills and move toward more advanced JavaScript concepts.

### Next Learning Goals

- Asynchronous JavaScript (Promises, async/await)
- Fetch API & Working with Real Data
- Error Handling (try/catch)
- DOM Manipulation
- Event Handling
- Local Storage
- Modern Web Development
- Real-World Project Building

---

# 📌 Repository Goal

The goal of this repository is to build strong, practical fluency with JavaScript's array and object methods — the tools used every day in real frontend and backend development.

Each task represents a practical step toward writing cleaner, shorter, and more expressive JavaScript code.

---

## 👨‍💻 Author

### Md. Aminul Islam Mahi

**Future Full Stack Developer**

---

<div align="center">

### ⭐ Thanks for visiting this repository!

**Built with ❤️ while learning with Programming Hero**

</div>