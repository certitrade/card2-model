import { Response } from "./Response"
import { PaymentCancelledRequest } from "./PaymentCancelledRequest"

export interface PaymentCancelledResponse extends PaymentCancelledRequest, Response {
	out: {
		payment_cancelled: {
			result: "0" | "1",
		},
	}
}
