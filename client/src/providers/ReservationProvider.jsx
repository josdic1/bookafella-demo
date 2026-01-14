import { useState, useEffect } from "react"
import ReservationContext from "../contexts/ReservationContext"
import { initialReservations } from "../data/data"

function ReservationProvider({ children }) {
   const [reservations, setReservations] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      // Simulate loading delay
      setTimeout(() => {
         setReservations(initialReservations)
         setLoading(false)
      }, 300)
   }, [])

   function handleAdd(newRes) {
      const resWithId = {
         ...newRes,
         id: Date.now().toString(36)
      }
      setReservations([...reservations, resWithId])
   }

   function handleEdit(updatedRes) {
      const updated = reservations.map(res =>
         res.id === updatedRes.id ? updatedRes : res
      )
      setReservations(updated)
   }

   function handleDelete(resId) {
      const updated = reservations.filter(res => res.id !== resId)
      setReservations(updated)
   }

   return (
      <ReservationContext.Provider
         value={{ reservations, loading, handleAdd, handleEdit, handleDelete }}
      >
         {children}
      </ReservationContext.Provider>
   )
}

export default ReservationProvider