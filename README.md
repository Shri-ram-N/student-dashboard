# Student Performance Dashboard

A simple and responsive web application to manage student records, track subject marks, analyze academic performance, and identify class toppers.

## Features

- **Dashboard Overview** — View total students, class average, passed students, and failed students.
- **Student Management** — Add, edit, and delete student records.
- **Subject Marks** — Record marks for five subjects, with validation between 0 and 100.
- **Performance Analysis** — Calculate student averages, total marks, highest marks, and lowest marks.
- **Grade Calculation** — Automatically assign grades based on student performance.
- **Pass/Fail Status** — Identify whether a student has passed or failed based on subject marks.
- **Search and Filters** — Search students by name and filter by average, passed status, or failed status.
- **Class Topper** — Display the student with the highest average.
- **Class Average Analysis** — Identify students whose averages are above the class average.
- **Alphabetical Student List** — View student records in alphabetical order.
- **Responsive Design** — Adapt the dashboard layout for desktop, tablet, and mobile screens.
- **Local Storage** — Save student records in the browser so they persist across page reloads.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

## Grading System

| Average Marks | Grade |
|---|---|
| 90–100 | A |
| 80–89.99 | B |
| 70–79.99 | C |
| 60–69.99 | D |
| Below 60 | F |

**Note:** A student receives grade F if any subject mark is below 35, regardless of their overall average.

## Pass/Fail Criteria

- **Passed:** Every subject mark is at least 35.
- **Failed:** At least one subject mark is below 35.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd <project-folder>
```

### 3. Run the Application

Open `index.html` in your browser, or use the **Live Server** extension in Visual Studio Code.

No additional dependencies or installation steps are required.

## Project Structure

```text
student-performance-dashboard/
├── index.html
├── studentDashboard.css
├── studentDashboard.js
└── README.md
```

## Data Storage

Student records are stored using browser Local Storage. The data remains available after refreshing the page in the same browser, but it is not synchronized across devices or browsers.

Clearing the browser's site data may remove the saved records.

## Future Improvements

- Subject-wise performance charts
- Export student reports to CSV or PDF
- Sort students by marks or average
- Add authentication and user accounts
- Store student records in a database