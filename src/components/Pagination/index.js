import {
    PaginationBox,
    PaginationPages,
    PaginationItem,
    PaginationLink,
    PaginationLinkIcon,
    PaginationLinkText,
    PaginationInfo,
    PaginationCount
} from "./styled";
import { VisuallyHidden } from "../../styles/global";

const Pagination = ({ currentPage, totalPages }) => (
    <PaginationBox aria-label="Pagination">
        <PaginationPages>
            {currentPage > 2 && (
                <li>
                    <PaginationLink
                        $prev
                        to="#"
                        aria-describedby="first-desc"
                    >
                        <PaginationLinkIcon
                            direction="left"
                            $double
                            aria-hidden="true"
                        />
                        <PaginationLinkText>First</PaginationLinkText>
                    </PaginationLink>
                    <VisuallyHidden id="first-desc">Go to first page</VisuallyHidden>
                </li>
            )}
            {currentPage > 1 && (
                <li>
                    <PaginationLink
                        $prev
                        to="#"
                        aria-describedby="prev-desc"
                    >
                        <PaginationLinkIcon direction="left" aria-hidden="true" />
                        <PaginationLinkText>Previous</PaginationLinkText>
                    </PaginationLink>
                    <VisuallyHidden id="prev-desc">Go to previous page</VisuallyHidden>
                </li>
            )}
            <PaginationItem>
                <PaginationInfo>
                    Page <PaginationCount>{currentPage}</PaginationCount>{" "}
                    of <PaginationCount>{totalPages}</PaginationCount>
                </PaginationInfo>
            </PaginationItem>
            {currentPage < totalPages && (
                <li>
                    <PaginationLink
                        $next
                        to="#"
                        aria-describedby="next-desc"
                    >
                        <PaginationLinkText>Next</PaginationLinkText>
                        <PaginationLinkIcon direction="right" aria-hidden="true" />
                    </PaginationLink>
                    <VisuallyHidden id="next-desc">Go to next page</VisuallyHidden>
                </li>
            )}
            {currentPage < totalPages - 1 && (
                <li>
                    <PaginationLink
                        $next
                        to="#"
                        aria-describedby="last-desc"
                    >
                        <PaginationLinkText>Last</PaginationLinkText>
                        <PaginationLinkIcon
                            direction="right"
                            $double
                            aria-hidden="true"
                        />
                    </PaginationLink>
                    <VisuallyHidden id="last-desc">Go to the last page</VisuallyHidden>
                </li>
            )}
        </PaginationPages>
    </PaginationBox>
);

export default Pagination;
