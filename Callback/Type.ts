export type Type =
	"check_card_data" |
	"check_3d_data" |
	"authorization_approved" |
	"authorization_failed" |
	"payment_cancelled" |
	"capture_result"

export namespace Type {
	export function is(value: any | Type) {
		return typeof(value) == "string" && (
			value == "check_card_data" ||
			value == "check_3d_data" ||
			value == "authorization_approved" ||
			value == "payment_cancelled" ||
			value == "capture_result"
		)
	}
}
