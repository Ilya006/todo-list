/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */

const getEnvVar = (key: string) => {
  if(process.env[key] === undefined) {
    console.log('hello error')
    throw new Error('Env variable is required')
  } 
  
  return process.env[key] || ''
}

/** API entrypoint */
export const API_URL = getEnvVar('REACT_APP_API_URL')