import { useLocation } from "react-router-dom";

function RegisterPage() {
  const location = useLocation();
  return (
    <>
      homepage!
      <br />
      <a
        href={`http://localhost:8000/api/auth/redirect/google?next=${location.pathname}${location.search}`}
      >
        <button>Google Login</button>
      </a>
    </>
  );
}

export default RegisterPage;
