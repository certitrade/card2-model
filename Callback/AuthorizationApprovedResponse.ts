import { Response } from "./Response"
import { AuthorizationApprovedRequest } from "./AuthorizationApprovedRequest"

export interface AuthorizationApprovedResponse extends AuthorizationApprovedRequest, Response {
	out: {
		authorization_approved: {
			result: "0" | "1",
		},
	}
}
