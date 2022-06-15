interface propsType {
  message: string;
}

export default function Text({message}: propsType) {
  return <h2>{message}</h2>;
}
