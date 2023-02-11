import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStar } from "react-icons/md"


const Star = ({ selected, halfSelected, setRating, index }) => {
    return (
        <div onClick={() => setRating(index)}>
            {halfSelected ? <MdOutlineStarHalf color="#FFC833" /> : selected ? <MdOutlineStar color="#FFC833" /> : <MdOutlineStarOutline color="#FFC833" />}
        </div>
    )

}

export default Star