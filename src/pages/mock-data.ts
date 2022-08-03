import { isTemplateSpan } from "typescript";

const sideMenuItems = [
    {
        level1: "Applications",
        level2: ["My Applications", "Create an Application"]
    },
    {
        level1: "My APIs",
        level2: [
            {
                header: "Overview",
                level3: []
            },
            {
                header: "Access Requests",
                level3: []
            },
            {
                header: "Add an API",
                level3: ["Getting Started", "API Design Guide", "API Gateway Integration", "Register an API"]
            },
        ],
    },
    {
        level1: "Workspace Settings",
        level2: ["My Applications", "Create an Application"],
        level3: []
    }
];

export default sideMenuItems;
