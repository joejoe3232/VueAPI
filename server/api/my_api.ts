import { HelloResponse } from '~/types/api';
import { getQuery } from 'h3'

export default defineEventHandler((event):HelloResponse => {
  // 從查詢參數中提取 name
  const query = getQuery(event)
  const name = query.name || 'Guest'

  // 回傳 JSON 格式
  return {
    success: true,
    data: {
      message: `Hello, ${name}!`
    }
  }
})
  