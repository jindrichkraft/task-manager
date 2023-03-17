interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps): JSX.Element => <>{children}</>;

export default DefaultLayout;
