import { useEffect } from "react";

interface PopupCloseProps {
  isOpen: boolean;
  styleOpenPopup: string;
  closeAllPopups: () => void;
}

function usePopupClose({ isOpen, styleOpenPopup, closeAllPopups }: PopupCloseProps) {
  useEffect(() => {
    if (!isOpen) return;

    const closeOverlay = (e: MouseEvent) => {
      e.stopPropagation();
      if ((e.target as HTMLElement).classList.contains(styleOpenPopup)) {
        closeAllPopups();
      }
    };

    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeEsc);
    document.addEventListener("mousedown", closeOverlay);

    return () => {
      document.removeEventListener("keydown", closeEsc);
      document.removeEventListener("mousedown", closeOverlay);
    };
  }, [isOpen, styleOpenPopup, closeAllPopups]);
}

export default usePopupClose;
