import { Request } from "./Request"

export interface CheckCardDataRequest extends Request {
	type: "check_card_data"
	in: {
		payment_id: number,
		bin: string,
		masked_cardno: string,
		cardholder_name: string,
		expiry_month: string,
		expiry_year: string,
	}
}

export namespace CheckCardDataRequest {
	export function is(value: any | CheckCardDataRequest): value is CheckCardDataRequest {
		return Request.is(value) &&
			value.type == "check_card_data"
	}
}
