import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import TemplateCard from './TemplateCard.astro'

describe('Template Card:', () => {
  test('should render card title', async () => {
    const CONTAINER_CONTENT = 'Template title'

    const container = await AstroContainer.create()
    const result = await container.renderToString(TemplateCard, {
      props: {
        templateTitle: CONTAINER_CONTENT
      }
    })

    expect(result).toContain(CONTAINER_CONTENT)
  })
})
