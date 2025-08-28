export const getApiPagesForView = (
    currentPage,
    itemsPerPage,
    itemsPerApiPage
) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const startApiPage = Math.floor(startIndex / itemsPerApiPage);
    const endApiPage = Math.floor((endIndex - 1) / itemsPerApiPage);

    return {
        startIndex,
        endIndex,
        startApiPage,
        endApiPage
    };
};
