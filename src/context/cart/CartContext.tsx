import { createContext } from "react";
import { ICartMovie } from "../../interfaces";

interface ContextProps {
  isLoaded: boolean;
  cart: ICartMovie[];
  numberOfItems: number;

  //!Methods
  addMovieToCart: (movie: ICartMovie) => void;
  closeOrder: () => void;
}

export const CartContext = createContext({} as ContextProps);
