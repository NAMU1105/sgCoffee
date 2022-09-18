const loadingText = "loading...";

type Props = JSX.IntrinsicElements["button"] & {
  isLoading?: boolean;
  apperance?: "primary" | "secondary" | "plain";
};

const Button: React.FC<Props> = ({
  children,
  isLoading,
  disabled,
  ...restProps
}) => {
  return (
    <button {...restProps} disabled={disabled || isLoading}>
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
