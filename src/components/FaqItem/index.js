// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, isActive, buttonId} = props
  const {id, questionText, answerText} = faqDetails
  const clickIconButton = () => {
    buttonId(id)
  }

  return (
    <li className="list-style">
      <div className="question-button-container">
        <h1 className="question-style">{questionText}</h1>
        <button type="button" className="button-style">
          <img
            src={
              isActive
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isActive ? 'minus' : 'plus'}
            className="icon-style"
            onClick={clickIconButton}
          />
        </button>
      </div>
      {isActive && (
        <div className="hidden-container">
          <hr className="hr-style" />
          <p className="hidden-content">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
