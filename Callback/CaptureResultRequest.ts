import { Request } from "./Request"

export interface CaptureResultRequest extends Request {
	type: "capture_result"
	in: {
		payment_id: string,
		result: "0" | "1",
	}
}

export namespace CaptureResultRequest {
	export function is(value: any | CaptureResultRequest): value is CaptureResultRequest {
		return Request.is(value) &&
			value.type == "capture_result" &&
			typeof(value.in) == "object" &&
			typeof(value.in.payment_id) == "string" &&
			(value.in.result == "0" || value.in.result == "1")
	}
}
