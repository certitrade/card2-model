import { ContinueResponse } from "./ContinueResponse"
import { AuthorizationFailedRequest } from "./AuthorizationFailedRequest"

export type AuthorizationFailedResponse = AuthorizationFailedRequest & ContinueResponse
