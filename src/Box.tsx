import teddy from './teddy.png'
import bunny from './bunny.png'

type BoxProps = {
  id: number, 
  filledWith: string
  takeTurn: (id: number) => void
}

const Box = ({id, filledWith, takeTurn}: BoxProps) => {
  return (
    <section className='box' onClick={() => {takeTurn(id)}}>
      {filledWith && <img className='box-img' src={filledWith === 'teddy' ? teddy : bunny} alt={`cartoon ${filledWith} icon`}/>}
    </section>
  )
}

export default Box