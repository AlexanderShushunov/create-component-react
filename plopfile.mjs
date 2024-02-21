import path from 'node:path';

export default function (plop) {
  plop.setPartial('ComponentName', '{{pascalCase name}}');
  plop.setPartial('CssClassName', '{{camelCase name}}');
  // controller generator
  plop.setGenerator('controller', {
    description: 'generate component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    }],
    actions: [{
      type: 'add',
      path: getFullPath('{{> ComponentName}}', '{{> ComponentName}}.tsx'),
      templateFile: 'templates/component.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{> ComponentName}}', 'index.tsx'),
      templateFile: 'templates/index.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{> ComponentName}}', '{{> ComponentName}}.pcss'),
      templateFile: 'templates/style.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{> ComponentName}}', '{{> ComponentName}}.pcss.d.ts'),
      templateFile: 'templates/style.d.ts.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{> ComponentName}}', '{{> ComponentName}}.story.tsx'),
      templateFile: 'templates/story.hbs'
    }]
  });
};

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}
