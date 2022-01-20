export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e9dd594333591dadc010a7',
                  title: 'Sanity Studio',
                  name: 'winsor-design-website-studio',
                  apiId: '4416e643-d335-45a0-a7d8-ffdf8b777b52'
                },
                {
                  buildHookId: '61e9dd59188304247da52e0e',
                  title: 'Blog Website',
                  name: 'winsor-design-website',
                  apiId: 'ea5a27c2-b33a-40df-9a87-03dc6a5fcf45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justtrustbit710/winsor-design-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://winsor-design-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
