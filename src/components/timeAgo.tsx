'use client'

import Dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const TimeAgo = ({ time }: { time: string }) => {
  Dayjs.extend(relativeTime)

  return <p>{Dayjs(time).fromNow()}</p>
}

export default TimeAgo
