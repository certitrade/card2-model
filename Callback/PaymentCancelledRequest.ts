import { Request } from "./Request"

export interface PaymentCancelledRequest extends Request {
	type: "payment_cancelled"
	in: {
		payment_cancelled: {
			payment_id: string,
			reason: string,
		},
	}
}

export namespace PaymentCancelledRequest {
	export function is(value: any | PaymentCancelledRequest): value is PaymentCancelledRequest {
		return Request.is(value) &&
			value.type == "payment_cancelled" &&
			typeof(value.in) == "object" &&
			typeof(value.in.payment_cancelled) == "object" &&
			typeof(value.in.payment_cancelled.payment_id) == "string" &&
			typeof(value.in.payment_cancelled.reason) == "string"
	}
}
