export interface Authorization {
	mti: string
	created: string
	type: "ECOM" | "MOTO"
	authcode: string
	respcode: string
	errorcode: string
	masked_card_no: string
	bin: string
	cardholder_name: string
}
