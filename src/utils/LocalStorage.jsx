const employees = [
  {
    id: 1,
    firstname: "Mahmud",
    email: "employee1@example.com",
    password: "mrmamu504",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Inventory Database",
        description: "Update the product listings in the database.",
        date: "2024-10-29",
        category: "Database Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Sales Report",
        description: "Prepare and submit the monthly sales report.",
        date: "2024-10-28",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Schedule Team Meeting",
        description: "Coordinate with the team to schedule the weekly meeting.",
        date: "2024-10-27",
        category: "Coordination",
      },
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Kuddus",
    email: "employee2@example.com",
    password: "mrmamu504",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Feedback Analysis",
        description: "Analyze feedback from the past month.",
        date: "2024-10-25",
        category: "Analysis",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website Maintenance",
        description: "Run routine maintenance checks on the website.",
        date: "2024-10-29",
        category: "IT Support",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Draft Social Media Post",
        description: "Prepare content for the social media post.",
        date: "2024-10-26",
        category: "Marketing",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstname: "Borkot",
    email: "employee3@example.com",
    password: "mrmamu504",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Product Presentation",
        description: "Design and prepare slides for the new product launch.",
        date: "2024-10-29",
        category: "Product Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Support Training",
        description: "Complete training for customer support.",
        date: "2024-10-22",
        category: "Training",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Muna",
    email: "employee4@example.com",
    password: "mrmamu504",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        title: "Data Entry",
        description: "Enter new client data into the CRM.",
        date: "2024-10-26",
        category: "Data Entry",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Organize Team Event",
        description: "Plan and organize a team-building event.",
        date: "2024-10-30",
        category: "Human Resources",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstname: "Anwar",
    email: "employee5@example.com",
    password: "mrmamu504",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Revise Budget Report",
        description: "Revise the budget report for Q4.",
        date: "2024-10-29",
        category: "Finance",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market Research",
        description: "Conduct research for upcoming product launch.",
        date: "2024-10-28",
        category: "Market Research",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
];

// data for admin
const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "mrmamu504",
  },
];

// set data from local storage
export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// get data from local storage
export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return {
    employees,
    admin,
  };
};
