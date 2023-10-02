import React from 'react'

export default function App() {

  const chats = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const listChats = chats.map(item => <div key={item} className="sid-chats"> <div className="avatar"><h2>{item}</h2></div> Chat {item}</div>)

  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="menu-item-head">MENU</div>
          <div className="menu-item"><a href="#">DASH</a></div>
          <div className="menu-item"><a href="#">LEADS</a></div>
          <div className="menu-item"><a href="#">CONTACTS</a></div>
          <div className="menu-item"><a href="#">MAILS</a></div>
          <div className="menu-item"><a href="#">STATS</a></div>
          <div className="menu-item"><a href="#">SETTINGS</a></div>
        </div>
        <div className="sidebar">
          <div className="sid-header">
          <div className="avatar"><h2>U</h2></div>            
            Usuario conectado
          </div>
          <div className="sid-search">
            <div className="sea-box">
              Buscar chats
            </div>
          </div>
          <div className="sid-content">
            {listChats}
          </div>
          <div className="sid-footer"></div>
        </div>
        <div className="main">
          <div className="ma-header">
            <div className="avatar"><h2>C</h2></div>
            Cliente Chat
          </div>
          <div className="ma-content">CHATS</div>
          <div className="ma-footer">
            <div className="f-send">Enviar mensajes</div>
          </div>
        </div>
      </div>
    </>
  )
}
