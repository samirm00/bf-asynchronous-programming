// Sequential vs Parallel

// The function given below fetches data from the server one-by-one
const fetchFilterData1 = async () => {
    try {
        const brands = await fetchBrands(); // 1
        const sizes = await fetchSizes(); //  2
        const occasions = await fetchOccasions(); // 3
        const idealFor = await fetchIdealFor(); // 4
        const neckTypes = await fetchNeckTypes(); // 5
        const sleeveTypes = await fetchSleeveTypes(); // 6
        const patterns = await fetchPatterns(); // 7
        const color = await fetchColors(); // 8

        // Now, display list of fetched data in filters
    } catch (error) {
        console.log('Something went wrong!');
        // Push the error to your crash analytics to track the bug
    }
};

// lets consider the below function that fetches data from server
const fetchFilterData2 = async () => {
    return Promise.all([
        fetchBrands(),
        fetchSizes(),
        fetchOccasions(),
        fetchIdealFor(),
        fetchNeckTypes(),
        fetchSleeveTypes(),
        fetchPatterns(),
        fetchColors(),
    ]);
};

const renderFilter = async () => {
    try {
        const [
            brands,
            sizes,
            occasions,
            idealFor,
            neckTypes,
            sleeveTypes,
            patterns,
            color,
        ] = await fetchFilterData2();

        // Now, display list of fetched data in filters
    } catch (error) {
        console.log('Something went wrong!');
        // Push the error to your crash analytics to track the bug
    }
};
           