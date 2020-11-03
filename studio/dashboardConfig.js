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
                  buildHookId: '5fa1936b8cfc2c0f0c12697e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qq9qn69f',
                  apiId: 'db4fe1cc-7349-41df-9284-92b23c09be00'
                },
                {
                  buildHookId: '5fa1936b0e9f110b46efd725',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9cjzdjbm',
                  apiId: 'b15062fa-6fce-472b-b33a-ee218ecacec7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/github-karsten/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9cjzdjbm.netlify.app', category: 'apps'}
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
