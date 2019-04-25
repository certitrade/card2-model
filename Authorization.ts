export interface Authorization {
	mti: string
	created: string
	type: "ECOM" | "MOTO"
	authcode: number
	respcode: string
	errorcode: string
	masked_card_no: string
	bin: number
	cardholder_name: string
}
