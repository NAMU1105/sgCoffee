const loadingText = 'loading...'

type Props = JSX.IntrinsicElements["button"] & {
  isLoading?: boolean
};

const CommonButton: React.FC<Props> = ({ children,isLoading,disabled,...restProps}) => {
  return (
    <button {...restProps} disabled={disabled || isLoading}>
      {isLoading ? loadingText: children}
    </button>
  );
};

export default CommonButton;
