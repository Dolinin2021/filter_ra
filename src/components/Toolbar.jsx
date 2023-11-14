export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className="container-button">
      {filters.map((item, i) => (
        <button
          key={i}
          onClick={() => onSelectFilter(item)}
          className={item === selected ? "active" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
