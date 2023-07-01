export async function getCall(url, data) {
  let response = await fetch(url, { method: "GET" });
  return await response.json();
}

export async function postCall(url, data) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
}
