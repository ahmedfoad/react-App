export function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        onClick={onSelect}
        className={`tab-button ${isSelected && "active"}`}
        type="button"
      >
        {children}
      </button>
    </li>
  );
}
