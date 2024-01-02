import { ItemProps } from "../types/Item.type";

const Item = ({data} : {data : ItemProps}) => {
    return <>{data.title}</>
}

export default Item;