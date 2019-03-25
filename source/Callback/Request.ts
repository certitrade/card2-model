import { Type } from "./Type"

export interface Request {
	type: Type
	in: object
}

export namespace Request {
	export function is(value: any | Request) {
		return typeof(value) == "object" &&
			Type.is(value.type) &&
			typeof(value.in) == "object" &&
			value.created == undefined &&
			value.out == undefined
	}
}
