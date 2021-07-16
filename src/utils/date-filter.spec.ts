import { dateFilter } from 'src/utils/date-filter'

describe('# Date filters', function() {
  it('should format date correctly', function() {
    const dateString = '2019-01-01 00:00:00'
    const result = dateFilter(dateString)

    expect(result).toMatchInlineSnapshot(`"2019-01-01"`)
  })

  it('should format recent date', function() {
    const dateString = new Date().toString()
    const result = dateFilter(dateString)

    expect(result).toMatchInlineSnapshot(`"몇 초 전"`)
  })
})
