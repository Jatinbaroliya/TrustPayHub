import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>

        <img className='w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2369690/f9dedd3ede47400aa951056c3484d4ee/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.png?token-time=1728000000&token-hash=NiV044x2GC2EX8j71t9e2ffN0-uZb1OAbNB008Usd7U%3D" alt="" />

        <div className='absolute -bottom-16 right-[46%] border-white border-2 rounded-full'>
          <img className='rounded-full' width={150} height={150} src="https://tse2.mm.bing.net/th?id=OIP.CzePmBbEmc4-6F4LOjlkpwHaE7&pid=Api&P=0&h=220" alt="" />
        </div>
      </div>

      <div className='info flex flex-col justify-center gap-1 items-center my-20'>

        <div className='font-bold text-lg'>
          @{params.username}
        </div>

        <div className='text-slate-400'>
          Creating premium audio content
        </div>

        <div className='text-slate-400'>
          59,764 members1,061 posts
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-10">
            {/* show the list of all the supporters as a leaderboard*/}

            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50</span>with a message "I support you, lots of❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50</span>with a message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50</span>with a message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50</span>with a message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50</span>with a message "I support you bro. Lots of ❤️"</span>
              </li>

            </ul>

          </div>

          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-10">
            <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
            <div className="flex flex-col gap-2">

              <div>
                <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' />
              </div>

              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount' />

              <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>

            <div className="mt-5 flex gap-2">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $50</button>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Username
