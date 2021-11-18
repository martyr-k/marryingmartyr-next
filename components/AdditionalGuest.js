const AdditionalGuest = ({
  value,
  position,
  incrementGuest,
  handleInputChange,
}) => {
  const handleClick = () => {
    if (position === 0) {
      incrementGuest();
    } else {
      incrementGuest(position);
    }
  };
  const handleChange = (event) => {
    handleInputChange(event, position);
  };

  return (
    <div className="input-group mb-3">
      <i
        className={`bi ${
          position === 0 ? "bi-person-plus" : "bi-person-x"
        } input-group-text cursor-pointer`}
        onClick={handleClick}
      ></i>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Joe Smith"
        autoComplete="off"
        required
      />
    </div>
  );
};

export default AdditionalGuest;
