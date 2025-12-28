import { StyledCategories, Category } from "./styled";

const Categories = ({ categories }) => (
    categories &&
    <StyledCategories>
        {categories.map(() => {
            <li key={<></>}>
                <Category>Nazwa kategorii</Category>
            </li>
        })}
    </StyledCategories>
);

export default Categories;
