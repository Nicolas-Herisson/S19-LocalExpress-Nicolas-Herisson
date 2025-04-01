import type { IProduct } from "../../@types";
import './Card.scss'
import Button from "../Button/Button";

export default function Card({ product }: { product: IProduct }) {
    return (
        <div className="card">

            <img className="card__image" src={product.images[0]} alt={product.title} />

            <div className="card__title"><strong>{product.title}</strong></div>
            <div className="card__description"> <em>{`${product.description.slice(0, 50)} ...`}</em> </div>

            <div className="card--Footer">
                <div className="card__price">{`${product.price} €`}</div>
                <Button label="Ajouter" />
            </div>
        </div>
    )
}