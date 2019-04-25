import { Request } from "./Request"

export interface PaymentCancelledRequest extends Request {
	type: "payment_cancelled"
	in: {
		payment_id: number,
		reason: string,
	}
}

export namespace PaymentCancelledRequest {
	export function is(value: any | PaymentCancelledRequest): value is PaymentCancelledRequest {
		return Request.is(value) &&
			value.type == "payment_cancelled"
	}
}
