import { Timestamp } from "@certitrade/ct2-model"

export interface Event {
	time: Timestamp
	description: string
}
