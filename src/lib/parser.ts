import yamljs from "yamljs";
import { XMLParser, XMLValidator } from "fast-xml-parser";

import jsonparser from "./jsonparser";

const parser = (str: string) => {
  try {
    JSON.parse(str);
    return jsonparser(str);
  } catch (err) {
    if (str.trim().startsWith("{")) {
      throw err;
    }

    try {
      const isValid = XMLValidator.validate(str);
      if (isValid !== true) {
        throw isValid;
      }

      const parser = new XMLParser();
      const output = parser.parse(str);

      return jsonparser(JSON.stringify(output));
    } catch (error) {
      const output = yamljs.parse(str);
      return jsonparser(JSON.stringify(output));
    }
  }
};

export default parser;
