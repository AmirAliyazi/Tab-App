import React, { useState } from 'react';
import "./App.css";

const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Autorize the user data ✅"
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒"
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰"
  },
]

function App() {

  // const activeTab = 1;
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen , setIsOpen] = useState(true);
  const [count , setCount] = useState(0);

  const handleActiveTab = (id) => {
    setActiveTab(id);
    setCount((s) => s+1);
    setCount((s) => s+1);
  }

  return (
    <div className='screen'>
      {isOpen ? <div className='tab'>
        <div className="tab-header">

          {
            tabData.map(tab => <div className={activeTab === tab.id ? "active" : ""}>
              <button onClick={() => handleActiveTab(tab.id)} key={tab.id}>{tab.title}</button>
            </div>)
          }

        </div>
        <div className="tab-content">
          {
            tabData[activeTab - 1].content
          }
          *** {count}

        </div>
      </div> : <h2 className='closed'>closed</h2>}
      <button onClick={() => setIsOpen((is) => ! is)} className='close'>&times;</button>
    </div>
  )
}

export default App;

