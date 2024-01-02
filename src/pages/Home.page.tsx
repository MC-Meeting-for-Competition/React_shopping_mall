import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemProps } from "../types/Item.type";
import Item from "../components/Item.component";

// 홈페이지
const HomePage = () => {
    // java에서 **int[]** array = new int[5]; 
    const [items, setItems] = useState<ItemProps[]>();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6').then(res => res.json()).then(json => setItems(json));
    });

    return <>
        <header>
            <Link to="/"><h3>MC SHOPPING MALL</h3></Link> 
            <nav>
                <Link to="/cart">쇼핑카트</Link>
            </nav>
        </header>
        <section>
            {
                items ? items.map((item, idx) => {
                    return <Item key={idx} data={item}/>
                }) : <></>
            }
        </section>
    </>
}

export default HomePage;