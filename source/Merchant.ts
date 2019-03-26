import * as model from "@certitrade/ct2-model"
import { type } from "os";

export interface Merchant {
	id: number,
	created: model.Timestamp,
	psp_id: number,
	paywin_caption: string,
	contract_id: string,
	contract_type: "ECOM" | "MOTO"
	acquirer: "EUROLINE" | "HANDELSBANKEN" | "NORDEA" | "SWEDBANK" | "TELLER" | "CLEARHAUS"
	processor: "EVRY" | "CLEARHAUS"
	"3d": {
		company_url: string,
		company_name: string,
		country_code: string,
		visa_active?: "0" | "1",
		acq_bin_visa?: string,
		mc_active?: "0" | "1",
		acq_bin_mc?: string,
	}
	flags: {
		COLLECT_CARDHOLDER_NAME?: "0" | "1",
		DISPLAY_AMEX?: "0" | "1",
		DISPLAY_DINERS?: "0" | "1",
		DISPLAY_MASTERCARD?: "0" | "1",
		DISPLAY_VISA?: "0" | "1",
		FIELD_IN_RET_REF?: "1" | "2" | "3",
		FIELD_IN_ADDITIONAL_REF?: "1" | "2",
	},
}

export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof(value) == "object" &&
			typeof(value.paywin_caption) == "string" &&
			(value.contract_type == "ECOM" || value.contract_type == "MOTO") &&
			(value.acquirer == "EUROLINE" || value.acquirer == "HANDELSBANKEN" || value.acquirer == "NORDEA" || value.acquirer == "SWEDBANK" || value.acquirer == "TELLER" || value.acquirer == "CLEARHAUS")
	}
}
