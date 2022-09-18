type Props = JSX.IntrinsicElements["button"] & {};

const CommonButton: React.FC<Props> = ({children,...restProps}) => {
  return (
    <button {...restProps}>
      {children}
    </button>
  );
};

export default CommonButton;
