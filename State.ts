export type State =
	"INIT" |                         // Initialt state när Authorization objektet skapas
	"READY_FOR_DOUBLE_CHECK" |       // Double-check innebär bortstädning av eventuella duplikata auktorisationer på en och samma payment
	"READY_FOR_AUTH" |               // Redo för auktorisation via extern agent - Evry, Clearhaus etc.
	"AUTH_IN_PROGRESS" |             // Auktorisation pågår
	"AUTH_DONE" |                    // Auktorisation avslutad OK
	"READY_FOR_CAPTURE" |            // Auktorisation avslutad OK och redo för capture
	"CANCELED" |                     // Auktorisationen backad dvs cancellerad aka anullerad
	"FAILED" |                       // Auktorisationen kunde ej genomföras
	"AUTH_ERROR"                     // Auktorisationen kunde ej genomföras
