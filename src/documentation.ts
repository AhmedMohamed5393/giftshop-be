import { DocumentBuilder } from "@nestjs/swagger";
const description = "Gift Shop backend system using Node.js and Nest.js";
export const config = new DocumentBuilder().setTitle("Gift Shop API").setDescription(description).setVersion("0.0.0").addCookieAuth('optional-session-id').addTag("").build();
