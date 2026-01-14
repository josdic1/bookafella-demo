import { useState, useEffect } from "react"
import MemberContext from "../contexts/MemberContext"
import { initialMembers } from "../data/data"

function MemberProvider({ children }) {
   const [members, setMembers] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      // Simulate loading delay
      setTimeout(() => {
         setMembers(initialMembers)
         setLoading(false)
      }, 300)
   }, [])

   function handleAdd(newMem) {
      const memberWithId = {
         ...newMem,
         id: Date.now().toString(36)
      }
      setMembers([...members, memberWithId])
   }

   function handleEdit(updatedMem) {
      const updated = members.map(mem =>
         mem.id === updatedMem.id ? updatedMem : mem
      )
      setMembers(updated)
   }

   function handleDelete(memId) {
      const updated = members.filter(mem => mem.id !== memId)
      setMembers(updated)
   }

   return (
      <MemberContext.Provider
         value={{ members, loading, handleAdd, handleEdit, handleDelete }}
      >
         {children}
      </MemberContext.Provider>
   )
}

export default MemberProvider