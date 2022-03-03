module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: ['index','intro/cdn', 'intro/cli'],
    },
    {
      type: 'category',
      label: 'SDK',
      collapsed: true,
      items: [
        'sdk/use-cases',
        'sdk/reference',
        {
          type: 'category',
          label: 'Guides',
          collapsed: true,
          items: [
            "sdk/guides/writing-custom-code",
            "sdk/guides/add-assertions"
          ]
        },
      ],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: ['components'],
    },
    {
      type: 'category',
      label: 'Action Sheet',
      collapsed: true,
      items: ['api/action-sheet'],
    },
    {
      type: 'category',
      label: 'Accordion',
      collapsed: true,
      items: ['api/accordion', 'api/accordion-group'],
    },
    {
      type: 'category',
      label: 'Alert',
      collapsed: true,
      items: ['api/alert'],
    },
    {
      type: 'category',
      label: 'Badge',
      collapsed: true,
      items: ['api/badge'],
    },
    {
      type: 'category',
      label: 'Breadcrumb',
      collapsed: true,
      items: ['api/breadcrumb', 'api/breadcrumbs'],
    },
    {
      type: 'category',
      label: 'Button',
      collapsed: true,
      items: ['api/button', 'api/ripple-effect'],
    },
    {
      type: 'category',
      label: 'Card',
      collapsed: true,
      items: ['api/card', 'api/card-content', 'api/card-header', 'api/card-subtitle', 'api/card-title'],
    },
    {
      type: 'category',
      label: 'Checkbox',
      collapsed: true,
      items: ['api/checkbox'],
    },
    {
      type: 'category',
      label: 'Chip',
      collapsed: true,
      items: ['api/chip'],
    },
    {
      type: 'category',
      label: 'Content',
      collapsed: true,
      items: ['api/app', 'api/content'],
    },
    {
      type: 'category',
      label: 'Date & Time Pickers',
      collapsed: true,
      items: ['api/datetime', 'api/picker'],
    },
    {
      type: 'category',
      label: 'Floating Action Button',
      collapsed: true,
      items: ['api/fab', 'api/fab-button', 'api/fab-list'],
    },
    {
      type: 'category',
      label: 'Grid',
      collapsed: true,
      items: ['api/grid', 'api/col', 'api/row'],
    },
    {
      type: 'category',
      label: 'Infinite Scroll',
      collapsed: true,
      items: ['api/infinite-scroll', 'api/infinite-scroll-content'],
    },
    {
      type: 'category',
      label: 'Icons',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
      ],
    },
    {
      type: 'category',
      label: 'Input',
      collapsed: true,
      items: ['api/input', 'api/textarea'],
    },
    {
      type: 'category',
      label: 'Item',
      collapsed: true,
      items: [
        'api/item',
        'api/item-divider',
        'api/item-group',
        'api/item-sliding',
        'api/item-options',
        'api/item-option',
        'api/label',
        'api/note',
      ],
    },
    {
      type: 'category',
      label: 'List',
      collapsed: true,
      items: ['api/list', 'api/list-header', 'api/virtual-scroll'],
    },
    {
      type: 'category',
      label: 'Media',
      collapsed: true,
      items: [
        'api/avatar',
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
        'api/img',
        'api/thumbnail',
      ],
    },
    {
      type: 'category',
      label: 'Menu',
      collapsed: true,
      items: ['api/menu', 'api/menu-button', 'api/menu-toggle', 'api/split-pane'],
    },
    {
      type: 'category',
      label: 'Modal',
      collapsed: true,
      items: ['api/modal', 'api/backdrop'],
    },
    {
      type: 'category',
      label: 'Navigation',
      collapsed: true,
      items: ['api/nav', 'api/nav-link'],
    },
    {
      type: 'category',
      label: 'Popover',
      collapsed: true,
      items: ['api/popover'],
    },
    {
      type: 'category',
      label: 'Progress Indicators',
      collapsed: true,
      items: ['api/loading', 'api/progress-bar', 'api/skeleton-text', 'api/spinner'],
    },
    {
      type: 'category',
      label: 'Radio',
      collapsed: true,
      items: ['api/radio', 'api/radio-group'],
    },
    {
      type: 'category',
      label: 'Range',
      collapsed: true,
      items: ['api/range'],
    },
    {
      type: 'category',
      label: 'Refresher',
      collapsed: true,
      items: ['api/refresher', 'api/refresher-content'],
    },
    {
      type: 'category',
      label: 'Reorder',
      collapsed: true,
      items: ['api/reorder', 'api/reorder-group'],
    },
    {
      type: 'category',
      label: 'Routing',
      collapsed: true,
      items: ['api/router', 'api/router-link', 'api/router-outlet', 'api/route', 'api/route-redirect'],
    },
    {
      type: 'category',
      label: 'Searchbar',
      collapsed: true,
      items: ['api/searchbar'],
    },
    {
      type: 'category',
      label: 'Segment',
      collapsed: true,
      items: ['api/segment', 'api/segment-button'],
    },
    {
      type: 'category',
      label: 'Select',
      collapsed: true,
      items: ['api/select', 'api/select-option'],
    },
    {
      type: 'category',
      label: 'Slides',
      collapsed: true,
      items: ['api/slides', 'api/slide'],
    },
    {
      type: 'category',
      label: 'Tabs',
      collapsed: true,
      items: ['api/tabs', 'api/tab', 'api/tab-bar', 'api/tab-button'],
    },
    {
      type: 'category',
      label: 'Toast',
      collapsed: true,
      items: ['api/toast'],
    },
    {
      type: 'category',
      label: 'Toggle',
      collapsed: true,
      items: ['api/toggle'],
    },
    {
      type: 'category',
      label: 'Toolbar',
      collapsed: true,
      items: ['api/toolbar', 'api/header', 'api/footer', 'api/title', 'api/buttons', 'api/back-button'],
    },
    {
      type: 'category',
      label: 'Typography',
      collapsed: true,
      items: ['api/text'],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: ['api'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      collapsed: true,
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md',
        },
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

  native: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'native',
        'native-community',
        'native-faq',
        {
          type: 'link',
          label: 'Community vs. Enterprise',
          href: 'https://ionic.io/docs/premier-plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'native', // Generate section automatically based on files
        },
      ],
    },
  ],
};
