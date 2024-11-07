import { ApiResponse } from '~/types/api';
import { HelloData } from '~/types/hello';
import { getQuery, createError } from 'h3';

export default defineEventHandler((event):ApiResponse<HelloData> => {
  // 從查詢參數中提取 name
  const query = getQuery(event);
  const name = query.name;

  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name is required'
    });
  }

  // 回傳 JSON 格式
  return {
    success: true,
    data: {
      message: `Hello, ${name}!`
    }
  }
})
  