import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import {
 
  XIcon,
 
} from "@heroicons/react/outline";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

    const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {

    addItemsToBasket();

    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };


    const RemoveItemFromBasket = () => {

    dispatch(removeFromBasket({id}));
    handleClose();

  };
  const classes = useStyles();
  return (
    <div className="relative flex flex-col m-5 bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div>
        <Currency quantity={price * 73} currency="INR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      {/* <button onClick={addItemsToBasket} className="mt-auto button">
        Add to Basket
      </button> */}

      <button className="mt-auto button" onClick={handleClick(`${title} -- Added to basket`)}>Add to Basket</button>
      <Snackbar
        style={{zIndex:"10000"}}
        key={messageInfo ? messageInfo.key : undefined}
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <Fragment style={{zIndex:"10000"}} className="bg-green-400">
            <Button color="secondary" size="small" onClick={RemoveItemFromBasket} >
              Remove
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <XIcon className="h-8 text-white cursor-pointer" />
            </IconButton>
          </Fragment>
        }
      />

    </div>
  );
}

export default Product;
