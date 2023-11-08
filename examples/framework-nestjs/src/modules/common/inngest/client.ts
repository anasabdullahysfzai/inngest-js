import { EventSchemas, Inngest } from "inngest";

import { Events } from "@modules/common/inngest/types";

export const inngest = new Inngest({
    id: "framework-nestjs",
    schemas: new EventSchemas().fromRecord<Events>(),
    baseUrl: "http://127.0.0.1:8288"
});
