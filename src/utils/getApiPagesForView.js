export const getApiPagesForView = (
    currentPage,
    itemsPerPage,
    itemsPerApiPage
) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const startApiPage = Math.floor(startIndex / itemsPerApiPage);
    const endApiPage = Math.floor((endIndex - 1) / itemsPerApiPage);
    console.log(`Pierwszy pakiet filmów: ${startApiPage} (${startIndex / itemsPerApiPage}) - startApiPage`);
    console.log(`Ostatni pakiet filmów: ${endApiPage} (${(endIndex - 1) / itemsPerApiPage}) - endApiPage`);

    return {
        startIndex,
        endIndex,
        startApiPage,
        endApiPage
    };
};
