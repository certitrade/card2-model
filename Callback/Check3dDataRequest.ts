import { Request } from "./Request"

export interface Check3dDataRequest extends Request {
	type: "check_3d_data"
	in: {
		payment_id: string,
		status: "0" | "1",
		md_status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8",
		eci?: string,
	}
}

export namespace Check3dDataRequest {
	export function is(value: any | Check3dDataRequest): value is Check3dDataRequest {
		return Request.is(value) &&
			value.type == "check_3d_data" &&
			typeof(value.in) == "object" &&
			typeof(value.in.payment_id) == "string" &&
			(value.in.status == "0" || value.in.status == "1") &&
			(
				value.in.md_status == "0" ||
				value.in.md_status == "1" ||
				value.in.md_status == "2" ||
				value.in.md_status == "3" ||
				value.in.md_status == "4" ||
				value.in.md_status == "5" ||
				value.in.md_status == "6" ||
				value.in.md_status == "7" ||
				value.in.md_status == "8"
			) &&
			typeof(value.in.eci) == "string"
	}
}
