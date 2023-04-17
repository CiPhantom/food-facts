import { Product } from "./product"

export type ResponseProducts = {
    count: number,
    page: number,
    page_count: number,
    page_size: number,
    products: Product[]
}