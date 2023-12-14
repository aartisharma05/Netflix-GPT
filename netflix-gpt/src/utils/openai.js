import OpenAI from "openai";
import {OPENAI_KEY} from "./constants";

const openai = new OpenAI({
  apiKey: process.env[OPENAI_KEY], // This is the default and can be omitted
});


export default openai;