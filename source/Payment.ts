import * as isoly from "isoly"
import { Timestamp } from "@certitrade/ct2-model"
import { Authorization } from "./Authorization"
import { Event } from "./Event"
import { Method } from "./Method"

export interface Payment {
	id: string
	created: Timestamp
	psp_id: string
	merchant_id: string
	method: Method
	session_id: string
	currency: isoly.CurrencyCode
	account: string
	amount: string
	language: isoly.Language
	order_number: string,
	reference: string
	description: string
	timeout: string
	authorizations: Authorization[]
	events: Event[]
}

// tslint:disable-next-line: no-namespace
export namespace Payment {
	export function is(payment: Payment | any): payment is Payment {
		return typeof(payment) == "object" &&
			typeof(payment.amount) == "string" &&
			isoly.CurrencyCode.is(payment.currency) &&
			isoly.Language.is(payment.language) &&
			payment.method == "CARD" &&
			typeof(payment.reference) == "string" &&
			typeof(payment.description) == "string"
	}
}
