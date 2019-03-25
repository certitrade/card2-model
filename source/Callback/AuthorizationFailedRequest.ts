import { Request } from "./Request"

export interface AuthorizationFailedRequest extends Request {
	type: "authorization_failed"
	in: {
		payment_id: number,
		respcode: string,
	}
}

export namespace AuthorizationFailedRequest {
	export function is(value: any | AuthorizationFailedRequest): value is AuthorizationFailedRequest {
		return Request.is(value) &&
			value.type == "authorization_failed"
	}
}
