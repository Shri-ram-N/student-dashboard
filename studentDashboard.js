class Student{
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAvg() {
        return +(this.totalMarks() / this.marks.length).toFixed(2);
    }

    getGrade() {
        let markBelow35 = this.marks.some(mark=>mark<35);
        if (markBelow35){
            return "F"
        }
        let averageMark = this.getAvg();
        switch (true) {
            case averageMark >= 90:
                return "A";
            case averageMark >= 80:
                return "B";
            case averageMark >= 70:
                return "C";
            case averageMark >= 60:
                return "D";
            default:
                return "F";
        }
    }

    getStatus(){
        let pass = this.marks.every(mark=>mark>=35);
        if (pass){
            return "Passed";
        }
        else{
            return "Failed";
        }
    }

    getHighestMark() {
        return Math.max(...this.marks);
    }

    getLowestMark() {
        return Math.min(...this.marks);
    }

    totalMarks() {
        return this.marks.reduce((total, mark) => total + mark, 0);
    }
}

let initialStudentRecords = [
    new Student("Shri", [30, 43, 35, 52, 50]),
    new Student("Ram", [82, 78, 85, 87, 98]),
    new Student("Naren", [72, 46, 64, 54, 94]),
    new Student("Hari", [20, 25, 45, 30, 40]),
    new Student("Mani", [76, 99, 56, 86, 44])
];

let studentRecords = [];
let nextAvailableStudentId = 1;
function loadStudents() {
    let storedStudentRecords = localStorage.getItem("studentDetails");
    if (storedStudentRecords === null) {
        studentRecords = initialStudentRecords;
        for (let student of studentRecords) {
            student.id = nextAvailableStudentId;
            nextAvailableStudentId++;
        }
        saveStudents();
    } 
    else {
        studentRecords = JSON.parse(storedStudentRecords);
        for (let student of studentRecords) {
            let studentRecord = new Student(student.name, student.marks);
            studentRecord.id = student.id;
            let studentIndex = studentRecords.indexOf(student);
            studentRecords[studentIndex] = studentRecord;
            if (student.id >= nextAvailableStudentId) {
                nextAvailableStudentId = student.id + 1;
            }
        }
    }
}

function saveStudents() {
    let studentRecordsToSave = [];
    for (let student of studentRecords) {
        studentRecordsToSave.push({
            id: student.id,
            name: student.name,
            marks: student.marks
        });
    }
    localStorage.setItem("studentDetails",JSON.stringify(studentRecordsToSave));
}
loadStudents();

let studentCardsContainer = document.querySelector(".studentsCardsParent");
let totalStudents = document.querySelector("#totalStudents");
let totalStudentsUpdate = document.querySelector("#totalStudentsUpdate");
let showingStudentsUpdate = document.querySelector("#showingStudentsUpdate");
let classAverage = document.querySelector("#classAvg");
let passedStudents = document.querySelector("#passedStudents");
let failedStudents = document.querySelector("#failedStudents");
let studentNameSearch = document.querySelector("#searchStudentName");
let allStudentsButton = document.querySelector("#allStudents");
let above80Button = document.querySelector("#above80");
let passedButton = document.querySelector("#passed");
let failedButton = document.querySelector("#failed");
let topperName = document.querySelector("#topperName");
let topperInitial = document.querySelector("#topperInitial");
let topperAverageMark = document.querySelector("#avgMark");
let topperGrade = document.querySelector("#grade");
let aboveAverageStudents = document.querySelector("#aboveAverageStudents");
let alphabeticalStudents = document.querySelector("#alphabeticalStudents");
let filterButtons = document.querySelectorAll(".filterBtns");
let newStudentButton = document.querySelector("#newStudentBtn");
let studentFormOverlay = document.querySelector("#formOverlay");
let studentForm = document.querySelector("#studentForm");
let studentFormTitle = document.querySelector("#formTitle");
let editingStudentId = document.querySelector("#editingStudentId");
let studentNameInput = document.querySelector("#studentNameInput");
let mark1 = document.querySelector("#mark1");
let mark2 = document.querySelector("#mark2");
let mark3 = document.querySelector("#mark3");
let mark4 = document.querySelector("#mark4");
let mark5 = document.querySelector("#mark5");
let formError = document.querySelector("#formError");
let saveStudentButton = document.querySelector("#saveStudentBtn");
let cancelFormButton = document.querySelector("#cancelFormBtn");
let closeFormButton = document.querySelector("#closeFormBtn");
let activeFilter = "all";

function createStudentRow(student,studentIndex) {
    let studentRow = document.createElement("tr");
    let numberCell = document.createElement("td");
    numberCell.textContent = studentIndex + 1;
    let nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    let averageCell = document.createElement("td");
    averageCell.textContent = student.getAvg().toFixed(2);
    let gradeCell = document.createElement("td");
    let gradeLabel = document.createElement("span");
    gradeLabel.classList.add("grade");
    gradeLabel.textContent = student.getGrade();
    gradeLabel.classList.add("grade-" + student.getGrade().toLowerCase());
    gradeCell.appendChild(gradeLabel);
    studentRow.append(numberCell, nameCell, averageCell, gradeCell);
    return studentRow;
}


function wholeStudentCards() {
    studentCardsContainer.innerHTML = `<p class="emptyStudentsMessage" id="emptyStudentsMessage" hidden>No students found. Try changing your search or filter.</p>`;
    let emptyStudentsMessage = document.querySelector("#emptyStudentsMessage");
    let searchText = studentNameSearch.value.toLowerCase();
    let matchingStudents = [];
    for (let student of studentRecords) {
        let matchesStudentName = student.name.toLowerCase().includes(searchText);
        let studentAverage = student.getAvg();
        let studentStatus = student.getStatus();
        let matchesSelectedFilter = true;
        if (activeFilter === "above80" && studentAverage < 80) {
            matchesSelectedFilter = false;
        } else if (activeFilter === "failed" && studentStatus == "Passed") {
            matchesSelectedFilter = false;
        } else if (activeFilter === "passed" && studentStatus == "Failed") {
            matchesSelectedFilter = false;
        }
        if (matchesStudentName && matchesSelectedFilter) {
            matchingStudents.push(student);
        }
    }

    for (let student of matchingStudents) {
        let studentCard = document.createElement("div");
        studentCard.classList.add("cardParent");
        studentCard.dataset.id = student.id;
        studentCard.dataset.name = student.name;
        studentCard.dataset.average = student.getAvg();
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("cardHeader");
        let studentInitial = document.createElement("p");
        studentInitial.classList.add("studentInitial");
        studentInitial.textContent = student.name.charAt(0).toUpperCase();
        let studentName = document.createElement("h3");
        studentName.classList.add("studentName");
        studentName.textContent = student.name;
        let studentGrade = document.createElement("span");
        studentGrade.classList.add("studentGrade");
        studentGrade.textContent = "Grade " + student.getGrade();
        cardHeader.append(studentInitial, studentName, studentGrade);
        let studentAverage = document.createElement("p");
        studentAverage.classList.add("studentAverage");
        studentAverage.textContent = `Average: ${student.getAvg()}`;
        let studentMarksTable = document.createElement("table");
        studentMarksTable.classList.add("studentMarks");
        let subjectNamesRow = document.createElement("tr");
        let subjectMarksRow = document.createElement("tr");
        for (let subjectIndex = 0; subjectIndex < student.marks.length; subjectIndex++) {
            let subjectName = document.createElement("th");
            subjectName.textContent = `Sub ${subjectIndex + 1}`;
            subjectNamesRow.appendChild(subjectName);
            let subjectMark = document.createElement("td");
            subjectMark.textContent = student.marks[subjectIndex];
            subjectMarksRow.appendChild(subjectMark);
        }
        studentMarksTable.append(subjectNamesRow, subjectMarksRow);
        let studentStatus = document.createElement("span");
        studentStatus.classList.add("studentStatus");
        if (student.getStatus() == "Passed") {
            studentStatus.textContent = "Status : Passed";
            studentStatus.classList.add("passed");
        } 
        else{
            studentStatus.textContent = "Status : Failed";
            studentStatus.classList.add("failed");
        }
        let marksSummary = document.createElement("div");
        marksSummary.classList.add("marksSummary");
        let totalMarksSection = document.createElement("div");
        totalMarksSection.innerHTML = `<p>Total</p><p>${student.totalMarks()}</p>`;
        let highestMarkSection = document.createElement("div");
        highestMarkSection.innerHTML = `<p>Highest</p><p>${student.getHighestMark()}</p>`;
        let lowestMarkSection = document.createElement("div");
        lowestMarkSection.innerHTML = `<p>Lowest</p><p>${student.getLowestMark()}</p>`;
        marksSummary.append(totalMarksSection,highestMarkSection,lowestMarkSection);
        let studentActionButtons = document.createElement("div");
        studentActionButtons.classList.add("studentButtons");
        let editStudentButton = document.createElement("button");
        editStudentButton.type = "button";
        editStudentButton.classList.add("editButton");
        editStudentButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 20h9"/> <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>`;
        editStudentButton.addEventListener("click", function(){
            openEditForm(student.id);
        });
        let deleteStudentButton = document.createElement("button");
        deleteStudentButton.type = "button";
        deleteStudentButton.classList.add("deleteButton");
        deleteStudentButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 7h16"/> <path d="M9 7V5h6v2"/> <path d="M6 7l1 13h10l1-13"/> <path d="M10 11v5m4-5v5"/> </svg>`;
        deleteStudentButton.addEventListener("click", function(){
            deleteStudent(student.id);
        });
        studentActionButtons.append(editStudentButton, deleteStudentButton);
        studentCard.append(cardHeader,studentAverage,studentMarksTable,studentStatus,marksSummary,studentActionButtons);
        studentCardsContainer.appendChild(studentCard);
    }
    showingStudentsUpdate.textContent = matchingStudents.length;
    emptyStudentsMessage.hidden = matchingStudents.length !== 0;
}

function renderTopper() {
    if (studentRecords.length === 0) {
        topperName.textContent = "No students yet";
        topperInitial.textContent = "-";
        topperAverageMark.textContent = "0.00";
        topperGrade.textContent = "-";
        return;
    }
    let topScoringStudent = studentRecords[0];
    for (let student of studentRecords) {
        if (student.getAvg() > topScoringStudent.getAvg()) {
            topScoringStudent = student;
        }
    }
    topperName.textContent = topScoringStudent.name + " 👑";
    topperInitial.textContent = topScoringStudent.name.charAt(0).toUpperCase();
    topperAverageMark.textContent = topScoringStudent.getAvg().toFixed(2);
    topperGrade.textContent = "Grade " + topScoringStudent.getGrade();
}

function renderAboveAverage(){
    aboveAverageStudents.innerHTML = "";
    if (studentRecords.length === 0) {
        return;
    }
    let totalStudentAverage = 0;
    for (let student of studentRecords) {
        totalStudentAverage += student.getAvg();
    }
    let classAverageMark = totalStudentAverage/studentRecords.length;
    let studentsAboveClassAverage = [];
    for (let student of studentRecords) {
        if (student.getAvg() > classAverageMark) {
            studentsAboveClassAverage.push(student);
        }
    }
    studentsAboveClassAverage.sort(function (a,b) {
        return b.getAvg() - a.getAvg();
    });
    for (let studentIndex = 0;studentIndex<studentsAboveClassAverage.length;studentIndex++){
        aboveAverageStudents.appendChild(
            createStudentRow(studentsAboveClassAverage[studentIndex], studentIndex)
        );
    }
}

function renderAlphabetical() {
    alphabeticalStudents.innerHTML = "";
    let studentsInAlphabeticalOrder = [...studentRecords];
    studentsInAlphabeticalOrder.sort(function(a,b) {
        return a.name.localeCompare(b.name);
    });
    for (let studentIndex = 0;studentIndex<studentsInAlphabeticalOrder.length; studentIndex++) {
        alphabeticalStudents.appendChild(
            createStudentRow(studentsInAlphabeticalOrder[studentIndex], studentIndex)
        );
    }
}

function renderDashboard() {
    let totalStudentCount = studentRecords.length;
    totalStudents.textContent = totalStudentCount;
    totalStudentsUpdate.textContent = totalStudentCount;
    let totalClassAverage = 0;
    for (let student of studentRecords) {
        totalClassAverage += student.getAvg();
    }
    if (totalStudentCount > 0) {
        classAverage.textContent = (totalClassAverage/totalStudentCount).toFixed(2);
    } 
    else {
        classAverage.textContent = "0.00";
    }
    let passedStudentCount = 0;
    let failedStudentCount = 0;
    for (let student of studentRecords) {
        if (student.getStatus()=="Passed") {
            passedStudentCount++;
        } 
        else{
            failedStudentCount++;
        }
    }
    passedStudents.textContent = passedStudentCount;
    failedStudents.textContent = failedStudentCount;
    renderTopper();
    renderAboveAverage();
    renderAlphabetical();
    wholeStudentCards();
}

function removeActiveBtn(selectedButton) {
    for (let filterButton of filterButtons) {
        filterButton.classList.remove("activeFilterBtn");
    }
    selectedButton.classList.add("activeFilterBtn");
}

allStudentsButton.addEventListener("click", function (event) {
    activeFilter = "all";
    removeActiveBtn(event.currentTarget);
    wholeStudentCards();
});

above80Button.addEventListener("click", function (event) {
    activeFilter = "above80";
    removeActiveBtn(event.currentTarget);
    wholeStudentCards();
});

passedButton.addEventListener("click", function (event) {
    activeFilter = "passed";
    removeActiveBtn(event.currentTarget);
    wholeStudentCards();
});

failedButton.addEventListener("click", function (event) {
    activeFilter = "failed";
    removeActiveBtn(event.currentTarget);
    wholeStudentCards();
});

studentNameSearch.addEventListener("input", function () {
    wholeStudentCards();
});

function openAddForm() {
    studentForm.reset();
    editingStudentId.value = "";
    studentFormTitle.textContent = "Add New Student";
    saveStudentButton.textContent = "Add Student";
    formError.textContent = "";
    studentFormOverlay.hidden = false;
    studentNameInput.focus();
}

function openEditForm(studentId) {
    let selectedStudent = null;
    for (let student of studentRecords) {
        if (student.id === studentId) {
            selectedStudent = student;
            break;
        }
    }
    if (selectedStudent === null) {
        return;
    }
    studentForm.reset();
    editingStudentId.value = selectedStudent.id;
    studentNameInput.value = selectedStudent.name;
    mark1.value = selectedStudent.marks[0];
    mark2.value = selectedStudent.marks[1];
    mark3.value = selectedStudent.marks[2];
    mark4.value = selectedStudent.marks[3];
    mark5.value = selectedStudent.marks[4];
    studentFormTitle.textContent = "Edit Student";
    saveStudentButton.textContent = "Save Changes";
    formError.textContent = "";
    studentFormOverlay.hidden = false;
    studentNameInput.focus();
}

function closeStudentForm() {
    studentFormOverlay.hidden = true;
    studentForm.reset();
    editingStudentId.value = "";
    formError.textContent = "";
}

function deleteStudent(studentId) {
    let selectedStudent = null;
    for (let student of studentRecords) {
        if (student.id === studentId) {
            selectedStudent = student;
            break;
        }
    }
    if (selectedStudent === null) {
        return;
    }
    if (confirm("Are you sure you want to delete " + selectedStudent.name + "?")){
        let remainingStudentRecords = [];
        for (let student of studentRecords) {
            if (student.id !== studentId) {
                remainingStudentRecords.push(student);
            }
        }
        studentRecords = remainingStudentRecords;
        saveStudents();
        renderDashboard();
    }
}

newStudentButton.addEventListener("click", openAddForm);
closeFormButton.addEventListener("click", closeStudentForm);
cancelFormButton.addEventListener("click", closeStudentForm);
studentFormOverlay.addEventListener("click", function(event){
    if (event.target === studentFormOverlay) {
        closeStudentForm();
    }
});

studentForm.addEventListener("submit", function(event){
    event.preventDefault();
    let enteredStudentName = studentNameInput.value;
    if (enteredStudentName === "") {
        formError.textContent = "Please enter the student's name.";
        studentNameInput.focus();
        return;
    }
    let enteredSubjectMarks = [
        Number(mark1.value),
        Number(mark2.value),
        Number(mark3.value),
        Number(mark4.value),
        Number(mark5.value)
    ];
    let subjectMarkInputs = [mark1, mark2, mark3, mark4, mark5];
    for (let subjectIndex = 0; subjectIndex < subjectMarkInputs.length; subjectIndex++) {
        if (subjectMarkInputs[subjectIndex].value.trim() === "") {
            formError.textContent = "Please enter all five subject marks.";
            subjectMarkInputs[subjectIndex].focus();
            return;
        }
        if (enteredSubjectMarks[subjectIndex] < 0 || enteredSubjectMarks[subjectIndex] > 100) {
            formError.textContent = "Each mark must be between 0 and 100.";
            subjectMarkInputs[subjectIndex].focus();
            return;
        }
    }

    let selectedStudentId = Number(editingStudentId.value);
    if (editingStudentId.value !== ""){
        let studentFound = false;
        for (let student of studentRecords) {
            if (student.id == selectedStudentId) {
                student.name = enteredStudentName;
                student.marks = enteredSubjectMarks;
                studentFound = true;
                break;
            }
        }
        if (!studentFound) {
            formError.textContent = "Student could not be found.";
            return;
        }
    } 
    else {
        let newStudentRecord = new Student(enteredStudentName, enteredSubjectMarks);
        newStudentRecord.id = nextAvailableStudentId;
        nextAvailableStudentId++;
        studentRecords.push(newStudentRecord);
    }
    saveStudents();
    closeStudentForm();
    renderDashboard();
});

renderDashboard();