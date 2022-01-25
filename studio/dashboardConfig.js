export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61f01cb25f51733a5c3521b1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1upkza7g',
                  apiId: '59643b7c-7604-4eda-83c3-00d7f2d857dd'
                },
                {
                  buildHookId: '61f01cb209e1d54497acd9af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ci93fgzp',
                  apiId: '65f4a22b-280c-415f-ac77-10f5693ae24f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/godsonfer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ci93fgzp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
