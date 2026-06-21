export default function (plop) {
  plop.setGenerator("create", {
    description: "Create component or section",

    prompts: [
      {
        type: "list",
        name: "type",
        message: "What do you want to create?",
        choices: ["components", "sections"],
      },
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
    ],

    actions: [
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/style.hbs",
      },
    ],
  });
}
