import Comment from './Comment'

const Comments = ({texts}) => {
  return (
    <div>  
        {
            texts.map((text) => (
                <Comment key={text.id} text={text}/>
            )
            )
        }
    </div>
  )
}

export default Comments