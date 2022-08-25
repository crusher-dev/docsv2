module.exports = {
  docs: [
    {
      type: "doc",
      label: "🦖 Overview",
      id: "index",
    },
    {
      type: 'category',
      label: '🧑‍🚀 Getting Started',
      collapsed: false,
      items: ['getting-started/what-is-crusher', 'getting-started/how-crusher-works', 'getting-started/create-your-first-test', 'getting-started/using-cli-within-project'],
    },
    {
      type: 'category',
      label: '🧱 Deploy crusher',
      collapsed: true,
      items: ['development/docker-deploy-locally', 'development/setting-up-development-env','development/architecture'],
    },
    {
      type: 'category',
      label: '💡 Guides',
      collapsed: true,
      items: ['guides/setting-up-services'],
    },
    {
      type: 'category',
      label: '🏄 Setting up',
      collapsed: true,
      items: [ "setting-up/manage-alerts"]
    },
    {
      type: 'category',
      label: '⚽ Integration',
      collapsed: true,
      items: ['integrations/with-vercel', 'integrations/with-ci-cd','integrations/with-jenkins'],
    },
    {
      type: 'category',
      label: '🏄‍♂️ Advanced',
      collapsed: true,
      items: ['advanced/custom-code-usecases', 'advanced/making-network-requests', 'advanced/working-with-emails', 'advanced/writing-custom-selectors'],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: true,
      items: ['advanced/faq'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      collapsed: true,
      items: [
        'cli',
        'cli/using-cli-in-project',
        'cli/custom-host',
        'cli/global-option',
        'cli/project-options',
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        },
      ],
    },
  ],
};
