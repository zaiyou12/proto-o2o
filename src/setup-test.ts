import 'jest'
import '@testing-library/jest-dom'

jest.spyOn(window.Storage.prototype, 'getItem').mockReturnValue('')
jest.spyOn(window.Storage.prototype, 'setItem').mockImplementation()
// jest.mock('src/config', () => ({
//   CONFIG: {},
// }))

// eslint-disable-next-line @typescript-eslint/no-empty-function
global.fetch = jest.fn().mockImplementation(() => new Promise(() => {}))

afterEach(() => {
  jest.clearAllMocks()
})
