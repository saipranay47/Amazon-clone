import Image from "next/image";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import { groupBy } from "lodash";

function Hover() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();
  const groupedItems = Object.values(groupBy(items, "id"));

  return (
    <div>
      <div className="flex flex-col">
        <h1 className={`text-xs "border-b "pb-2"}`}>
          {items.length === 0 ? "Your Amazon Basket is empty." : ""}
        </h1>

        {groupedItems.map((group, i) => (
          <div className="m-4 flex justify-items-center">
            <Image
              src={group[0].image}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
        <h2 className="whitespace-nowrap">
          
          Subtotal ({items.length} items):{" "}
          <span className="font-bold">
            <Currency quantity={total * 73} currency="INR" />
          </span>

        </h2>
      </div>
    </div>
  );
}

export default Hover;
