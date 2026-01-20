import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import TemplateCard from './TemplateCard.astro'

describe('Template Card:', () => {
  test('should render card title', async () => {
    const TEMPLATE_TITLE = 'Test Title'

    const container = await AstroContainer.create()
    const result = await container.renderToString(TemplateCard, {
      props: {
        templateTitle: TEMPLATE_TITLE
      }
    })

    expect(result).toContain(TEMPLATE_TITLE)
  })
})
