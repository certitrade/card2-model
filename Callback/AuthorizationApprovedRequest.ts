import { Request } from "./Request"

export interface AuthorizationApprovedRequest extends Request {
	type: "authorization_approved"
	in: {
		authorization_approved: {
			payment_id: string,
			authcode: string,
			eci: string,
		},
	}
}

export namespace AuthorizationApprovedRequest {
	export function is(value: any | AuthorizationApprovedRequest): value is AuthorizationApprovedRequest {
		return Request.is(value) &&
			value.type == "authorization_approved" &&
			typeof(value.in) == "object" &&
			typeof(value.in.authorization_approved) == "object" &&
			typeof(value.in.authorization_approved.payment_id) == "string" &&
			typeof(value.in.authorization_approved.authcode) == "string" &&
			typeof(value.in.authorization_approved.eci) == "string"
	}
}
