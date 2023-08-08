import React from 'react'

const Card = ({prop}) => {
  return (
    <div>
        <div class="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
    {prop.title}
  </h3>
  <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
   {prop.category}
  </p>
  <p class="mt-2 text-gray-800 dark:text-gray-400">
    {prop.description}
  </p>
  
</div>
    </div>
  )
}

export default Card