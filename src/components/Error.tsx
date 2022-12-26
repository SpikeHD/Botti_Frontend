import './Error.css'

interface Props {
  message: string
  show: boolean
}

export function Error(props: Props) {
  return (
    <div class={`error ${props.show && 'show'}`}>{props.message}</div>
  )
}