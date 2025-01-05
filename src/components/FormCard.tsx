import React from 'react'
import ActivityForm from './Form'

export default function FormCard() {
  return (
      <div className="flex flex-col justify-center items-center p-6">
          <div className="text-center mb-6">

          </div>
          <div className="w-full max-w-md bg-white dark:bg-gray-900 p-16 rounded-lg shadow-lg">
              <ActivityForm />
          </div>
      </div>
  )
}
