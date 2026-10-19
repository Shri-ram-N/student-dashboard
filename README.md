# Student Performance Dashboard

A responsive web application to manage student records, track academic performance, and analyze student marks through a simple dashboard.

**Live Demo:** [View Student Performance Dashboard](https://shri-ram-n.github.io/student-dashboard/)

**Source Code:** [GitHub Repository](https://github.com/Shri-ram-N/student-dashboard)

## Features

- **Dashboard Overview** — View key statistics about students and their academic performance.
- **Student Management** — Add, edit, and delete student records.
- **Subject Marks** — Record marks for five subjects with validation between 0 and 100.
- **Performance Analysis** — Calculate total marks, average marks, grades, and pass/fail status.
- **Search Students** — Find students using the search functionality.
- **Filter Students** — Filter student records based on available criteria.
- **Class Statistics** — View class averages and identify top-performing students.
- **Sorting** — Sort students alphabetically and by performance where supported.
- **Above Class Average** — Identify students performing above the class average.
- **Local Storage** — Save student records in the browser using `localStorage`.
- **Responsive Design** — Access the dashboard on desktop, tablet, and mobile devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

## Project Structure

```text
student-dashboard/
├── index.html
├── studentDashboard.css
├── studentDashboard.js
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shri-ram-N/student-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd student-dashboard
   ```

3. Open `index.html` in your browser.

   Alternatively, use the Live Server extension in Visual Studio Code to run the application locally.

## Grading System

The dashboard uses the following grading system based on average marks.

| Average Marks | Grade |
|---|---|
| 90 and above | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| Below 60 | F |

### Pass/Fail Criteria

A student must score at least 35 marks in every subject to pass.

If a student scores below 35 in any subject, the result is **Fail**, regardless of the overall average.

## Data Storage

Student records are stored in the browser's `localStorage`.

- Records remain available after refreshing the page in the same browser.
- Data is stored locally on the current browser and device.
- Clearing browser storage or site data may remove saved records.
- The application does not require a backend database.

## Responsive Design

The dashboard adapts to different screen sizes.

- **Desktop:** Displays dashboard statistics and student records in a wider layout.
- **Tablet:** Adjusts cards and dashboard sections to the available space.
- **Mobile:** Uses a compact layout for easier navigation and viewing.

## Future Improvements

- Add student data import and export.
- Introduce charts for visual performance analysis.
- Add more filtering and sorting options.
- Integrate a backend and database.
- Implement user authentication.
- Generate downloadable student performance reports.

## Contributing

Suggestions and contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit and push your changes.
5. Open a pull request.

---

### Links

- **Live Website:** https://shri-ram-n.github.io/student-dashboard/
- **GitHub Repository:** https://github.com/Shri-ram-N/student-dashboard
