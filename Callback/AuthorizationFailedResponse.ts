import { Response } from "./Response"
import { AuthorizationFailedRequest } from "./AuthorizationFailedRequest"

export interface AuthorizationFailedResponse extends AuthorizationFailedRequest, Response {
	out: {
		authorization_failed: {
			result: "0" | "1",
			continue_payment: "0" | "1",
		},
	}
}
