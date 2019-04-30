import { Request } from "./Request"

export interface AuthorizationApprovedRequest extends Request {
	type: "authorization_approved"
	in: {
		payment_id: string,
		authcode: string,
		eci: string,
	}
}

export namespace AuthorizationApprovedRequest {
	export function is(value: any | AuthorizationApprovedRequest): value is AuthorizationApprovedRequest {
		return Request.is(value) &&
			value.type == "authorization_approved" &&
			typeof(value.in) == "object" &&
			typeof(value.in.payment_id) == "string" &&
			typeof(value.in.authcode) == "string" &&
			typeof(value.in.eci) == "string"
	}
}
