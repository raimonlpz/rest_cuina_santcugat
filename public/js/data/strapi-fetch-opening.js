async function fetchOpening(locale = "es") {
  try {
    const response = await fetch(
      `${window.API_URL}openings?populate=*&locale=${locale}`,
      {
        headers: { Authorization: `Bearer ${window.API_TOKEN}` },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching opening hours:", error);
  }
}
