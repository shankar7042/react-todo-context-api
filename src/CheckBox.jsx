function CheckBox({ onCheck, checked }) {
  return <input type="checkbox" onChange={onCheck} checked={checked} />;
}

export default CheckBox;
