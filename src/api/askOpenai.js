const API_BASE =
  process.env.REACT_APP_API_BASE || "http://YOUR-SERVER-HOST:8080";

export async function askOpenai(messages) {
  const r = await fetch(`${API_BASE}/api/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({