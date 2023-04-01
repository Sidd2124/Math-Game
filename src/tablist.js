import './App.css'

const Sidd = props => {
  const {tab, Dhoni} = props
  const {displayText, tabId} = tab

  const Change = () => {
    Dhoni(tabId)
  }

  return (
    <div>
      <button type="button" onClick={Change}>
        {displayText}
      </button>
    </div>
  )
}

export default Sidd
