export type ItemProps = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string, // url
    rating: {
        rate: number,
        count: number
    }
};