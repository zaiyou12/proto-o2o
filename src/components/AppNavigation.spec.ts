import { render } from '@testing-library/vue'
import { router } from 'src/router'
import registerGlobalComponents from 'src/plugins/global-components'
import { useUserStore } from 'src/store/user'
import AppNavigation from './AppNavigation.vue'

describe('# AppNavigation', () => {
  beforeEach(async () => {
    await router.push('/')
  })

  it('should render Sign in and Sign up when user not logged', () => {
    const { container } = render(AppNavigation, {
      global: { plugins: [registerGlobalComponents, router] },
    })

    expect(container.querySelectorAll('.nav-item')).toHaveLength(3)
    expect(container.textContent).toContain('Home')
    expect(container.textContent).toContain('Sign in')
    expect(container.textContent).toContain('Sign up')
  })

  it('should render xxx when user logged', () => {
    const store = useUserStore()
    store.updateUser({ id: 1, username: 'foo', email: '', token: '', bio: undefined, image: undefined })
    const { container } = render(AppNavigation, {
      global: {
        plugins: [registerGlobalComponents, router],
        mocks: { $store: store },
      },
    })

    expect(container.querySelectorAll('.nav-item')).toHaveLength(4)
  })
})
