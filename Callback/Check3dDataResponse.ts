import { Response } from "./Response"
import { Check3dDataRequest } from "./Check3dDataRequest"

export interface Check3dDataResponse extends Check3dDataRequest, Response {
	out: {
		check_3d_data: {
			result: "0" | "1",
			continue_payment: "0" | "1",
		},
	}
}
