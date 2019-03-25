import { Response } from "./Response"
export interface ContinueResponse extends Response {
	out: {
		result: 0 | 1,
		continue_payment: 0 | 1,
	}
}

export namespace ContinueResponse {
	export function is(value: any | ContinueResponse): value is ContinueResponse {
		return Response.is(value) &&
			(value.out.continue_payment == 0 || value.out.continue_payment == 1)
	}
}
