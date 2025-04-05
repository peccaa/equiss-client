// Define column visibility configurations for different table views
export const ltmColumnConfig = {
  // Columns that should be available in the LTM plan view
  availableColumns: [
    "code", // ID (includes title)
    "building", // Blocks
    "nscode", // Nscode
    "category", // Category
    "plannedYear", // Periode
    "budget", // Estimat
    "actions", // Actions
    "priority", // Priority (available but hidden by default)
    "startDate", // Created date (available but hidden by default)
    "tg", // TG (available but hidden by default)
    "kg", // KG (available but hidden by default)
  ],

  // Default visibility state for columns
  defaultVisibility: {
    code: true, // ID + title
    building: true, // Blocks
    nscode: true, // Nscode
    category: true, // Category
    plannedYear: true, // Periode
    budget: true, // Estimat
    actions: true, // Actions menu
    priority: false, // Hidden by default
    startDate: false, // Hidden by default
    tg: false, // Hidden by default
    kg: false, // Hidden by default
  },
};

// You can add more configurations for other views here
export const pvlColumnConfig = {
  // Example configuration for PVL view
  availableColumns: [
    "code",
    "building",
    "nscode",
    "category",
    "plannedYear",
    "budget",
    "status",
    "progress",
    "actions",
  ],
  defaultVisibility: {
    code: true,
    building: true,
    nscode: true,
    category: true,
    plannedYear: true,
    budget: true,
    status: true,
    progress: true,
    actions: true,
  },
};
