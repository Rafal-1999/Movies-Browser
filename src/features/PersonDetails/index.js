import {
    PersonCard,
    PersonContent,
    PersonImageBox,
    PersonName,
    PersonRole
} from "./styled";

const PersonDetails = () => {

    return (
        <PersonCard>
            <PersonContent>
                <PersonImageBox />
                <PersonName>Imię osoby</PersonName>
                <PersonRole>Sifu</PersonRole>
            </PersonContent>
        </PersonCard>
    )
};

export default PersonDetails;
