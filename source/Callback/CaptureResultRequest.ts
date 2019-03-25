import { Request } from "./Request"

export interface CaptureResultRequest extends Request {
	type: "capture_result"
	in: {
		payment_id: number,
		result: number,
	}
}

export namespace CaptureResultRequest {
	export function is(value: any | CaptureResultRequest): value is CaptureResultRequest {
		return Request.is(value) &&
			value.type == "capture_result"
	}
}
