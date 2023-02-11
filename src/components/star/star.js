import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStar } from "react-icons/md"


const Star = ({ selected, halfSelected }) => {
    return (
        <>
            {halfSelected ? <MdOutlineStarHalf color="#FFC833" /> : selected ? <MdOutlineStar color="#FFC833" /> : <MdOutlineStarOutline color="#FFC833" />}
        </>
    )

}

export default Star