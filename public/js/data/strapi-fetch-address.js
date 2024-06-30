async function fetchAddress() {
  try {
    const response = await fetch(`${window.API_URL}address?populate=*`, {
      headers: { Authorization: `Bearer ${window.API_TOKEN}` },
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching menu", err);
  }
}
