import {PactV3, SpecificationVersion} from "@pact-foundation/pact";
import * as path from "node:path";

export const provider = new PactV3({
  consumer: "todo-web",
  provider: "todo-service",
  port: 4000,
  dir: path.resolve(process.cwd(), '../pacts'),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V4
});