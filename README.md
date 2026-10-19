# Student Performance Dashboard

A responsive web application for managing student records, tracking academic performance, and analyzing student marks through a simple dashboard.

**GitHub Repository:** [Shri-ram-N/student-dashboard](https://github.com/Shri-ram-N/student-dashboard)

## Features

- **Dashboard Overview** — View key statistics about students and their academic performance.
- **Student Management** — Add, edit, and delete student records.
- **Subject Marks** — Record marks for five subjects with validation between 0 and 100.
- **Performance Analysis** — Calculate total marks, average marks, grades, and pass/fail status.
- **Search Students** — Find students using the available search functionality.
- **Filter Students** — Filter student records based on available criteria.
- **Class Statistics** — View the class average and identify top-performing students.
- **Sorting** — Sort students alphabetically and by performance where supported.
- **Above Class Average** — Identify students performing above the class average.
- **Local Storage** — Preserve student records in the browser using `localStorage`.
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

You need a modern web browser and a code editor such as Visual Studio Code.

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

   Alternatively, use the **Live Server** extension in Visual Studio Code to run the project locally.

## Grading System

The dashboard calculates grades based on student performance.

| Average Marks | Grade |
|---|---|
| 90 and above | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| Below 60 | F |

**Pass/Fail Rule:** A student must score at least 35 marks in every subject to pass. If the student scores below 35 in any subject, the result is Fail, regardless of the average.

## Data Storage

Student records are stored in the browser's `localStorage`.

- Data remains available when the page is refreshed in the same browser.
- Data is stored locally on the current browser and device.
- Clearing browser storage or site data may remove saved records.
- The application does not use a backend database.

## Responsive Design

The dashboard adapts to different screen sizes:

- **Desktop:** Dashboard statistics and student records are displayed in a wider layout.
- **Tablet:** Cards and dashboard sections adjust to the available space.
- **Mobile:** Student cards and statistics stack into a compact layout for easier viewing.

## Future Improvements

- Add student data export and import.
- Add charts for visual performance analysis.
- Introduce additional filtering and sorting options.
- Add backend integration and database storage.
- Implement user authentication.
- Generate downloadable student performance reports.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch to your fork.
5. Open a pull request.

---

**Repository:** [https://github.com/Shri-ram-N/student-dashboard](https://github.com/Shri-ram-N/student-dashboard)
