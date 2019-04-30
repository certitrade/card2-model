import { Request } from "./Request"

export interface AuthorizationFailedRequest extends Request {
	type: "authorization_failed"
	in: {
		authorization_failed: {
			payment_id: string,
			respcode: string,
		},
	}
}

export namespace AuthorizationFailedRequest {
	export function is(value: any | AuthorizationFailedRequest): value is AuthorizationFailedRequest {
		return Request.is(value) &&
			value.type == "authorization_failed" &&
			typeof(value.in) == "object" &&
			typeof(value.in.authorization_failed) == "object" &&
			typeof(value.in.authorization_failed.payment_id) == "string" &&
			typeof(value.in.authorization_failed.respcode) == "string" && value.in.authorization_failed.respcode.length == 2
	}
}
