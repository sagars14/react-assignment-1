import Button from "@material-ui/core/Button";
interface propsType {
  label: string;
  handleClick: () => void;
}
export default function ButtonComponent({ label, handleClick }: propsType) {
  return <Button onClick={handleClick}>{label}</Button>;
}
<div></div>;
