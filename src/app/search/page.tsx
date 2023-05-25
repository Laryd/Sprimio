import { MediaType } from "@/utils/types"

interface Props {
    type: MediaType | 'search'
}

function Catalogue(props: Props) {
  return (
    <div>{props.type}</div>
  )
}

export default Catalogue