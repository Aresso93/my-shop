import { create } from "zustand";

export interface CartStateOverlay{
    open: boolean;
    toggle: () => void;
    openOverlay: () => void;
    closeOverlay: () => void;
}

export const useCartPanel = create<CartStateOverlay>((set, get) => ({
    
    open: false,
    toggle: () => set({open: !get().open}),
    openOverlay: () => set({open: true}),
    closeOverlay: () => set({open: false}),
    /*le tonde in cui ho wrappato l'oggetto che segue la freccia sono un return implicito 
    e mi serve il return perché la lambda restituisce un oggetto (il return implicito senza le tonde non funziona con gli obj)*/
}))