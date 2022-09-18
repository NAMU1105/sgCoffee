type Props = JSX.IntrinsicElements["button"] & {};

const CommonButton: React.FC<Props> = (props: Props) => {
  const { children, type, onClick, disabled } = props;
  return (
    <button type={type ?? "submit"} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default CommonButton;
