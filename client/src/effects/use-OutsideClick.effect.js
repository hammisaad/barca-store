import { useEffect } from "react";
import { closeCart } from "../redux/cart/cart-actions";

function useOutsideClick(ref, dispatch) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(closeCart());
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dispatch]);
}

export default useOutsideClick;
