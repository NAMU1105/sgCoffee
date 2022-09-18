type Props = JSX.IntrinsicElements["button"] & {
  isLoading?: boolean
};

const CommonButton: React.FC<Props> = ({ children,isLoading,...restProps}) => {
  return (
    <button {...restProps}>
      {children}
    </button>
  );
};

export default CommonButton;
