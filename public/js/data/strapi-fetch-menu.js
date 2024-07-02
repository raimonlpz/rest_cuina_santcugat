async function fetchMenu(locale = "es") {
  try {
    const response = await fetch(
      `${window.API_URL}menu-dishes?populate=*&locale=${locale}`,
      {
        headers: { Authorization: `Bearer ${window.API_TOKEN}` },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching menu:", err);
  }
}
