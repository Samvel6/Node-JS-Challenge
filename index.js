import "dotenv/config";

import { say } from "cowsay";

const { NAME, CAMPUS } = process.env;

console.log(say({ text: Hello I'm ${NAME} from ${CAMPUS}! }));