import { EventItem } from '../eventsStore/types'

export interface User {
  id: string,
  name: string,
  email: string,
  events: EventItem[]
}