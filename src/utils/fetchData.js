export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '601aca2e86msh581690afcc6055fp1e14d6jsn893108fb92c7',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return an empty array on error
  }
};
