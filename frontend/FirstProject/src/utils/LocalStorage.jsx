
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "emp1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        title: "Create Login UI",
        description: "Design login page using React and Tailwind",
        date: "2026-01-05",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNo: 2,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-03",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNo: 3,
        title: "API Integration",
        description: "Integrate login API with frontend",
        date: "2026-01-02",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "emp2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        title: "Dashboard UI",
        description: "Create employee dashboard layout",
        date: "2026-01-04",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNo: 2,
        title: "Form Validation",
        description: "Add validation to login form",
        date: "2026-01-03",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNo: 3,
        title: "CSS Refactor",
        description: "Clean and refactor old CSS code",
        date: "2026-01-01",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Neha",
    email: "emp3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        title: "Create REST API",
        description: "Build employee API using Spring Boot",
        date: "2026-01-05",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNo: 2,
        title: "Database Design",
        description: "Design employee task table",
        date: "2026-01-02",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNo: 3,
        title: "Deploy Backend",
        description: "Deploy backend on server",
        date: "2026-01-01",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstName: "Pooja",
    email: "emp4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        title: "Test APIs",
        description: "Test all APIs using Postman",
        date: "2026-01-04",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNo: 2,
        title: "Write Test Cases",
        description: "Write unit test cases",
        date: "2026-01-02",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNo: 3,
        title: "Bug Verification",
        description: "Verify fixed bugs",
        date: "2026-01-01",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    email: "emp5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNo: 1,
        title: "Prepare Report",
        description: "Prepare weekly progress report",
        date: "2026-01-05",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNo: 2,
        title: "Client Meeting",
        description: "Attend client feedback meeting",
        date: "2026-01-03",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNo: 3,
        title: "Requirement Analysis",
        description: "Analyze new project requirements",
        date: "2026-01-01",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
