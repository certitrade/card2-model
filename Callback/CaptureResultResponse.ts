import { Response } from "./Response"
import { CaptureResultRequest } from "./CaptureResultRequest"

export interface CaptureResultResponse extends CaptureResultRequest, Response {
	out: {
		capture_result: {
			result: "0" | "1",
		},
	}
}
