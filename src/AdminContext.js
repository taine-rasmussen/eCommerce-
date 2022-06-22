import { createContext } from 'react'

const context = {
   example: true,
   this: 'that',
   age: 26,
   theme: '#000'
}

export const AdminContext = createContext(context)