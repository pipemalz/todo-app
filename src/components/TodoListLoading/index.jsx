import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function TodoListLoading ({ count }) {
  return (
    <Skeleton count={count} borderRadius={5} height={40} style={{ marginBottom: '6px'}} />
  )
}