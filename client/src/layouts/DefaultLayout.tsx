import PageNavigation from '../components/blocks/PageNavigation';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps): JSX.Element => (
  <>
    <PageNavigation />
    {children}
  </>
);

export default DefaultLayout;
