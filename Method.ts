export type Method =
	"CARD" |
	"ONE_CLICK" |
	"INIT_RECURRING" |
	"RECURRING" |
	"CARD_MASTERPASS" |
	"INIT_RECURRING_MASTERPASS"

export namespace Method {
	export function is(value: Method | any): value is Method {
		return typeof(value) == "string" && (
			value == "CARD" ||
			value == "ONE_CLICK" ||
			value == "INIT_RECURRING" ||
			value == "RECURRING" ||
			value == "CARD_MASTERPASS" ||
			value == "INIT_RECURRING_MASTERPASS"
		)
	}
}
