// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    activeList: [],
  }

  buttonId = id => {
    const {activeList} = this.state
    const condition = activeList.includes(id)
    let newList
    if (condition === false) {
      newList = [...activeList, id]
    } else {
      newList = activeList.filter(eachFaq => eachFaq !== id)
    }
    this.setState({activeList: newList})
  }

  render() {
    const {faqsList} = this.props
    const {activeList} = this.state
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="faqs-heading-style">Faqs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                key={eachFaq.id}
                buttonId={this.buttonId}
                isActive={activeList.includes(eachFaq.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
