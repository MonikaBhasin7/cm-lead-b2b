import axios from "axios";

export async function getCall() {
  let response = await axios.get("http://localhost:8080/cmblogin");
  print(`response - ${response.data}`);
}
