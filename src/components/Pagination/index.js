import { VisuallyHidden } from "../../styles/global";

const Pagination = ({ currentPage, totalPages }) => (
    <nav aria-label="Pagination">
        <ul>
            {currentPage > 2 && (
                <li>
                    <a href="#" aria-describedby="first-desc" >
                        <i aria-hidden="true" />
                        <span>First</span>
                    </a>
                    <VisuallyHidden id="first-desc">Go to first page</VisuallyHidden>
                </li>
            )}
            {currentPage > 1 && (
                <li>
                    <a href="#" aria-describedby="prev-desc">
                        <i aria-hidden="true" />
                        <span>Previous</span>
                    </a>
                    <VisuallyHidden id="prev-desc">Go to previous page</VisuallyHidden>
                </li>
            )}
            <li>
                <p>
                    Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                </p>
            </li>
            {currentPage < totalPages && (
                <li>
                    <a href="#" aria-describedby="next-desc">
                        <span>Next</span>
                        <i aria-hidden="true" />
                    </a>
                    <VisuallyHidden id="next-desc">Go to next page</VisuallyHidden>
                </li>
            )}
            {currentPage < totalPages - 1 && (
                <li>
                    <a href="#" aria-describedby="last-desc">
                        <span>Last</span>
                        <i aria-hidden="true" />
                    </a>
                    <VisuallyHidden id="last-desc">Go to the last page</VisuallyHidden>
                </li>
            )}
        </ul>
    </nav>
);

export default Pagination;
