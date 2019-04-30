import { Response } from "./Response"
import { CheckCardDataRequest } from "./CheckCardDataRequest"

export interface CheckCardDataResponse extends CheckCardDataRequest, Response {
	out: {
		check_card_data: {
			result: "0" | "1",
			continue_payment: "0" | "1",
		},
	}
}
