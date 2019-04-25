import { Request } from "./Request"

export interface Check3dDataRequest extends Request {
	type: "check_3d_data"
	in: {
		payment_id: number,
		status: 0 | 1,
		md_status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
		eci?: number,
	}
}

export namespace Check3dDataRequest {
	export function is(value: any | Check3dDataRequest): value is Check3dDataRequest {
		return Request.is(value) &&
			value.type == "check_3d_data"
	}
}
