
const Comment = ({text}) => {
  return (
    <div className="comment">
        <h3>
            {text.name}
        </h3>
        <p>
            {text.text}
        </p>
    </div>
  )
}

export default Comment