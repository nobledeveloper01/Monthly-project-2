import React from 'react'


export default function Home() {
  return (
    <div className="containers">
    <h1 className='Home-title'>Welcome to Task Manager!</h1>
    <p className='pre-know'>Stay organized and manage your tasks efficiently with our powerful task management app. Whether you're a busy professional, a student, or a homemaker, Task Manager is here to help you stay on top of your to-do list.</p>
    <h2 className='home-subtitle'>Key Features:</h2>
    <ul className='point-start'>
      <li className='point'>Create tasks and set due dates</li>
      <li className='point'>Categorize tasks into different projects or categories</li>
      <li className='point'>Prioritize tasks based on urgency or importance</li>
      <li className='point'>Mark tasks as completed once you're done</li>
      <li className='point'>Set reminders and receive notifications for upcoming deadlines</li>
      <li className='point'>Easily track your progress and stay motivated</li>
      <li className='point'>Collaborate with others by sharing tasks or projects</li>
      <li className='point'>Sync your tasks across devices for seamless access</li>
    </ul>
    <p className='after-know'>Start managing your tasks effectively and make the most of your time with Task Manager. Sign up today and experience the power of efficient task management.</p>
    <p className='after-know'>Happy organizing!</p>
  </div>
  )
}
