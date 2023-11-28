import classes from "./menu-toggle.module.css";

export const MenuToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`${classes.navHamburger} ${isOpen ? classes.active : ""}`}
      onClick={onClick}
    >
      <span className={classes.container}>
        <span className={classes.top}></span>
        <span className={classes.middle}></span>
        <span className={classes.bottom}></span>
      </span>
    </button>
  );
};
