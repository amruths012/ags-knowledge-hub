const API_URL = "http://localhost:5000/api";

export async function getHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Knowledge API is not available");
  }

  return response.json();
}

export async function getTopics() {
  const response = await fetch(`${API_URL}/topics`);

  if (!response.ok) {
    throw new Error("Unable to load topics");
  }

  return response.json();
}
