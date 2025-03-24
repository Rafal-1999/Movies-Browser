export const fetchDataFromApi = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Nie udało się pobrać danych.");
            }
            return response.json();
        });
};
