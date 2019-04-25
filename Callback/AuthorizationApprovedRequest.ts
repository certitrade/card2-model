import { Request } from "./Request"

export interface AuthorizationApprovedRequest extends Request {
	type: "authorization_approved"
	in: {
		payment_id: number,
		authcode: string,
		eci: number,
	}
}

export namespace AuthorizationApprovedRequest {
	export function is(value: any | AuthorizationApprovedRequest): value is AuthorizationApprovedRequest {
		return Request.is(value) &&
			value.type == "authorization_approved"
	}
}
