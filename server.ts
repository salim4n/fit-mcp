import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { calculMetabolism, calculNutrition, calculRepartition } from "./tools/calculate.js";
import { Profile } from "./type.js";
import { generateCourseList, generateDailyMeals } from "./prompts/pompts.js";

// Create an MCP server
const server = new McpServer({
  name: "FitMCP",
  version: "1.0.0"
});



server.tool("calculNutrition",
  { profile: Profile },
  async ({ profile }) => ({
    content: [{ type: "text", text: JSON.stringify(calculNutrition(profile)) }]
  })
);

server.tool("calculMetabolism",
  { profile: Profile },
  async ({ profile }) => ({
    content: [{ type: "text", text: JSON.stringify(calculMetabolism(profile.gender, profile.age, profile.weight, profile.height)) }]
  })
);

server.tool("calculRepartition",
  { profile: Profile },
  async ({ profile }) => ({
    content: [{ type: "text", text: JSON.stringify(calculRepartition(profile.objective, profile.activityLevel)) }]
  })
);



server.prompt(
  "generateDailyMeals",
  () => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: generateDailyMeals()
      }
    }]
  })
);


server.prompt(
  "generateCourseList",
  () => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: generateCourseList()
      }
    }]
  })
);

server.sendPromptListChanged()
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);