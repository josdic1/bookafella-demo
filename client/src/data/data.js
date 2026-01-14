export const initialMembers = [
  { id: "r4gt", member: "admin", role: "admin" },
  { id: "ed65", member: "josh", role: "user" },
  { id: "3ed5", member: "dorrie", role: "user" },
  { id: "d5tg", member: "demi", role: "user" },
  { id: "2ww2", member: "abba", role: "user" },
  { id: "y765", member: "jill", role: "user" },
  { id: "0b49", member: "frank", role: "user" },
  { id: "5f8f", member: "lucas", role: "user" }
];

export const initialReservations = [
  // JOSH - PAST
  {
    id: "past1",
    member_id: "ed65",
    member: "josh",
    room: "c",
    arrival: "2025-12-20T19:00",
    guests: 3,
    notes: "Holiday dinner",
    guest_array: ["dorrie", "demi", "frank"]
  },
  {
    id: "past2",
    member_id: "ed65",
    member: "josh",
    room: "a",
    arrival: "2025-11-28T18:30",
    guests: 2,
    notes: "Thanksgiving",
    guest_array: ["dorrie", "lucas"]
  },
  {
    id: "past3",
    member_id: "ed65",
    member: "josh",
    room: "b",
    arrival: "2026-01-05T12:00",
    guests: 4,
    notes: "New Year brunch",
    guest_array: ["phil", "dave", "lauren", "abba"]
  },
  // JOSH - FUTURE
  {
    id: "4rr6",
    member_id: "ed65",
    member: "josh",
    room: "a",
    arrival: "2026-01-18T19:30",
    guests: 4,
    notes: "vegetarian options",
    guest_array: ["dean", "rooster", "carl", "bella"]
  },
  {
    id: "co08",
    member_id: "ed65",
    member: "josh",
    room: "b",
    arrival: "2026-01-25T18:00",
    guests: 3,
    notes: "VIP",
    guest_array: ["phil", "dave", "lauren"]
  },
  {
    id: "6527",
    member_id: "ed65",
    member: "josh",
    room: "a",
    arrival: "2026-02-14T19:00",
    guests: 2,
    notes: "Anniversary dinner",
    guest_array: ["dorrie"]
  },
  // OTHER MEMBERS
  {
    id: "jos5",
    member_id: "3ed5",
    member: "dorrie",
    room: "a",
    arrival: "2026-02-15T17:00",
    guests: 3,
    notes: "client dinner",
    guest_array: ["max", "josh", "rosie"]
  },
  {
    id: "fla4",
    member_id: "2ww2",
    member: "abba",
    room: "d",
    arrival: "2026-02-03T19:45",
    guests: 1,
    notes: "Kosher",
    guest_array: ["jill"]
  },
  {
    id: "tr7e",
    member_id: "d5tg",
    member: "demi",
    room: "c",
    arrival: "2026-05-27T16:15",
    guests: 3,
    notes: "Birthday",
    guest_array: ["emma", "zeke", "axel"]
  },
  {
    id: "dek8",
    member_id: "y765",
    member: "jill",
    room: "d",
    arrival: "2026-02-17T18:15",
    guests: 1,
    notes: "VIP Birthday",
    guest_array: ["cal"]
  },
  {
    id: "f0cb",
    member_id: "d5tg",
    member: "demi",
    room: "d",
    arrival: "2026-03-04T15:15",
    guests: 2,
    notes: "Brunch",
    guest_array: ["bobbi", "judah"]
  },
  {
    id: "d579",
    member_id: "0b49",
    member: "frank",
    room: "e",
    arrival: "2026-02-04T13:13",
    guests: 3,
    notes: "Shellfish allergy",
    guest_array: ["slater", "boogie", "scotty"]
  },
  {
    id: "7c16",
    member_id: "0b49",
    member: "frank",
    room: "b",
    arrival: "2026-03-27T21:15",
    guests: 2,
    notes: "Vegan",
    guest_array: ["honey", "dan"]
  },
  {
    id: "b8cc",
    member_id: "3ed5",
    member: "dorrie",
    room: "b",
    arrival: "2026-01-20T19:00",
    guests: 2,
    notes: "pizza party",
    guest_array: ["josh", "demi"]
  },
  {
    id: "5d35",
    member_id: "y765",
    member: "jill",
    room: "e",
    arrival: "2026-02-28T18:30",
    guests: 2,
    notes: "No menus",
    guest_array: ["anne", "becca"]
  }
];