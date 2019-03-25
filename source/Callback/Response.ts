import { Request } from "./Request"

export interface Response {
	id: number
	created: string
	out: {
		result: 0 | 1,
	}
}

export namespace Response {
	export function is(value: any | Response) {
		return typeof(value) == "object" &&
			typeof(value.created) == "string" &&
			typeof(value.out) == "object" &&
			(value.out.result == 0 || value.out.result == 1) ||
			Request.is(value)
	}
}
