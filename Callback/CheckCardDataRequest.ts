import { Request } from "./Request"

export interface CheckCardDataRequest extends Request {
	type: "check_card_data"
	in: {
		check_card_data: {
			payment_id: string,
			bin: string,
			masked_cardno: string,
			cardholder_name: string,
			expiry_month: string,
			expiry_year: string,
		},
	}
}

export namespace CheckCardDataRequest {
	export function is(value: any | CheckCardDataRequest): value is CheckCardDataRequest {
		return Request.is(value) &&
			value.type == "check_card_data" &&
			typeof(value.in) == "object" &&
			typeof(value.in.check_card_data) == "object" &&
			typeof(value.in.check_card_data.payment_id) == "string" &&
			typeof(value.in.check_card_data.bin) == "string" &&
			typeof(value.in.check_card_data.masked_cardno) == "string" &&
			typeof(value.in.check_card_data.cardholder_name) == "string" &&
			typeof(value.in.check_card_data.expiry_month) == "string" &&
			typeof(value.in.check_card_data.expiry_year) == "string"
	}
}
