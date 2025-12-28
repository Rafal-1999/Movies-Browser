import { useSelector } from "react-redux";
import {
    PeopleCards,
    PersonCard,
    PersonLink,
    PersonContent,
    PersonImageBox,
    PersonContent,
    PersonName,
    PersonRole
} from "./styled";
import { VisuallyHidden } from "../../styles/global";

const PeopleList = () => {
    const people = useSelector();

    return (
        people && (
            <PeopleCards>
                {people.map(() => (
                    <PersonCard key={<></>}>
                        <PersonLink>
                            <VisuallyHidden>
                                Przejdź do szczegółów osoby
                            </VisuallyHidden>
                        </PersonLink>
                        <PersonContent>
                            <PersonImageBox person />
                            <div>
                                <PersonName>Imię</PersonName>
                                <PersonRole>Tekst</PersonRole>
                            </div>
                        </PersonContent>
                    </PersonCard>
                ))}
            </PeopleCards>
        )
    )
};

export default PeopleList;
