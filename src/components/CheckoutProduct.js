import { MinusSmIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
    addToBasket,
    removeFromBasket,
    removeGroupedFromBasket,
} from "../slices/basketSlice";

function CheckoutProduct(props) {
    const dispatch = useDispatch();

    const id = props.id;
    const title = props.title;
    const rating = props.rating;
    const price = props.price;
    const description = props.description;
    const category = props.category;
    const image = props.image;
    const hasPrime = props.hasPrime;
    const quantity = props.quantity;

    const total = price * quantity;

    function addItemToBasket() {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime,
        };

        // Sending the product via an action to the redux store (= basket "slice")
        dispatch(addToBasket(product));
    }

    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }));
    }

    function removeGroupFromBasket() {
        dispatch(removeGroupedFromBasket({ id }));
    }

    return (
        <div className="block py-4 sm:grid sm:grid-cols-5 sm:my-3">
            <div className="text-center sm:text-left">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit="contain"
                />
            </div>

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p className="my-3">{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price* 73} currency="INR" /> × {quantity}  ={" "}
                <span className="font-bold">
                    <Currency quantity={total* 73} currency="INR" />
                </span>

                <div className="flex  mt-5 mb-5">
                    <button
                        className="bg-gray-300 rounded-md  text-xs p-1 outline-none border-none"
                        onClick={removeItemFromBasket}>
                        <MinusSmIcon className="h-5 text-black" />
                    </button>
                    <div className="p-2 whitespace-normal sm:whitespace-nowrap text-sm outline-none">
                        Qty: <span className="font-bold">{quantity}</span>
                    </div>
                    <button className="bg-gray-300 rounded-md text-xs p-1" onClick={addItemToBasket}>
                        <PlusIcon className="h-5 text-black" />
                    </button>
                </div>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">
                            FREE Next-day Delivery
                        </p>
                    </div>
                )}
            </div>

            {/* Buttons on the right of the products */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={removeGroupFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
