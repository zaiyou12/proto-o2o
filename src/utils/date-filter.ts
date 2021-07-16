import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ko')
dayjs.extend(relativeTime)

export const dateFilter = (dateString: string): string => {
  const date = dayjs(dateString)
  const now = dayjs()

  if (now.diff(date, 'day') < 3) {
    return date.fromNow()
  }
  return date.format('YYYY-MM-DD')
}

