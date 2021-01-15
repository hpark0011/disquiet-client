import { useLocation } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';

function HomePage() {
  const location = useLocation();
  return (
    <PageContainer>
      homepage!<br />
      <a href={`http://localhost:8000/api/auth/redirect/google?next=${location.pathname}${location.search}`}>
        <button>Google Login</button>
      </a>
    </PageContainer>
  );
}

export default HomePage;
