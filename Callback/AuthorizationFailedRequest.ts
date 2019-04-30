import { Request } from "./Request"

export interface AuthorizationFailedRequest extends Request {
	type: "authorization_failed"
	in: {
		payment_id: string,
		respcode: string,
	}
}

export namespace AuthorizationFailedRequest {
	export function is(value: any | AuthorizationFailedRequest): value is AuthorizationFailedRequest {
		return Request.is(value) &&
			value.type == "authorization_failed" &&
			typeof(value.in) == "object" &&
			typeof(value.in.payment_id) == "string" &&
			typeof(value.in.respcode) == "string" && value.in.respcode.length == 2
	}
}
