import { Payment } from "./Payment"

describe("Payment", () => {
	it("is", async () => {
		const payment: Payment = {
			id: "1001",
			created: "2005-05-05 15:05:15",
			psp_id: "psp001",
			merchaint_id: "mid001",
			amount: "10000",
			currency: "752",
			language: "en",
			reference: "1337",
			description: "A test.",
			method: "CARD",
			session_id: "session01",
			account: "12345",
			order_number: "test",
			timeout: 30,
			authorizations: [],
			events: [],
		}
		expect(Payment.is(payment)).toBeTruthy()
	})
})
