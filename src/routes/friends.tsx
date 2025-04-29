import React, { useState } from 'react'

function Friends() {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Guler Resulova",
      avatar: "https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg"
    },
    {
      id: 2,
      name: "Alion GreenHeart",
      avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    },
    {
      id: 3,
      name: "Fidan Quliyeva",
      avatar: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    },
    {
      id: 4,
      name: "Aysu Nagiyeva",
      avatar: "https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg"
    }
  ])
  const [searched, setSearched] = useState("")
  const removeFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id))
  }
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="w-full max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">My Friends</h1>
        
        <fieldset className="space-y-1 mx-auto mb-6">
          <label htmlFor="Search" className="hidden">Search</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input 
              type="search" 
              name="Search" 
              placeholder="Search friends..." 
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-400"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
            />
          </div>
        </fieldset>
        
        <div className="flex flex-col w-full p-4 md:p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          {filteredFriends.length > 0 ? (
            filteredFriends.map(friend => (
              <div 
                key={friend.id} 
                className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0"
              >
                <div className="flex space-x-4">
                  <img 
                    alt={`${friend.name}'s avatar`} 
                    src={friend.avatar} 
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" 
                  />
                  <div className="flex flex-col space-y-1 justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">
                      {friend.name}
                    </a>
                  </div>
                </div>
                <button 
                  type='button' 
                  className='w-full sm:w-auto bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors'
                  onClick={() => removeFriend(friend.id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              {friends.length === 0 ? "Dostun yoxdur" : "Uygun dost tapilmadi!!!!"}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
export default Friends