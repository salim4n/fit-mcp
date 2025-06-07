# FitMCP - Fitness Nutrition Calculator MCP Server

FitMCP is a Model Context Protocol (MCP) server that provides tools for calculating nutritional needs, metabolic rates, and macronutrient distributions based on user profiles. It helps generate personalized meal plans and grocery lists.

## Features

- **Metabolism Calculation**: Calculate basal metabolic rate based on gender, age, weight, and height
- **Macronutrient Distribution**: Generate optimal macronutrient ratios based on fitness goals (muscle gain, weight loss, maintenance)
- **Nutrition Planning**: Calculate complete nutritional needs based on user profile
- **Daily Meal Generation**: Generate structured daily meal plans with recipes and instructions
- **Grocery List Generation**: Create organized grocery lists for meal planning

## Tools

The server provides the following MCP tools:

- `calculMetabolism`: Calculate basal metabolic rate
- `calculRepartition`: Calculate macronutrient distribution based on goals and activity level
- `calculNutrition`: Calculate complete nutritional needs based on user profile

## Prompts

The server also provides the following prompt generators:

- `generateDailyMeals`: Generate a structured daily meal plan with detailed recipes
- `generateCourseList`: Generate an organized grocery list by categories

## User Profile Schema

The user profile includes:

- `gender`: "male" or "female"
- `age`: User's age in years
- `weight`: User's weight in kilograms
- `height`: User's height in centimeters
- `activityLevel`: Activity multiplier (typically 1.2-2.0)
- `objective`: "muscleGain", "weightLoss", or "maintenance"
- `dietType`: "vegetarian", "vegan", "noPork", or "none"
- `intolerances`: String describing food intolerances

## Installation

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
```

## Technologies

- TypeScript
- Model Context Protocol (MCP)
- Zod for schema validation

## License

MIT
