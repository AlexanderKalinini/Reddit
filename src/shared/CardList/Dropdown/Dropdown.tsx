import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};
let adf = 123456;

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
}: IDropdownProps) {
  const refDiv = useRef<HTMLDivElement>(null);
  const dropdown = document.querySelector("#dropdown_root");
  if (!dropdown) return null;
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  function getCoords() {
    let div = refDiv?.current?.getBoundingClientRect();
    if(!div) return
    return {
      top: div.top  + window.pageYOffset + div.height,
      right: div.right + window.pageXOffset,
      bottom: div.bottom + window.pageYOffset,
      left: div.left + window.pageXOffset+87
    };
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={refDiv}>
        {button}{" "}
      </div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div className={styles.listContainer} style={{left:getCoords()?.left,top:getCoords()?.top}}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          dropdown
        )}
    </div>
  );
}
