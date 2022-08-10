import yamljs from "yamljs";

import jsonparser from "./jsonparser";

const parser = (str: string) => {
  try {
    JSON.parse(str);
    return jsonparser(str);
  } catch (err) {
    const output = yamljs.parse(str);
    return jsonparser(JSON.stringify(output));
  }
};

export default parser;
