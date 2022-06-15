const fetchData = async (url) => {
  if (!url) {
    console.log('Url is missed');
    return;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
