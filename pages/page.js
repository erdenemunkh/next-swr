import { useRequest } from "./useRequest";

export const Page = ({ index }) => {
  const { data, error } = useRequest(`/?page=${index}`)

  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>

  return data.results.map(item => <div key={item.id}>{item.name}</div>)
}
