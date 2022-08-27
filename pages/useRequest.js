import useSwr from 'swr'

const baseUrl = 'https://swapi.dev/api/planets'

export const useRequest = (path, name) => {
  if (!path) {
    throw new Error('Path is required')
  }

  const url = name ? baseUrl + path + '/' + name : baseUrl + path
  const { data, error } = useSwr(url)

  return { data, error }
}