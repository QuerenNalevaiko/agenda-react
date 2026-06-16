import LoginIlustracao from "../components/Login/LoginIlustracao";
import LoginForm from "../components/Login/LoginForm";
import "./style/loginPage.css";

function LoginPage({ onIdentificar }) {
  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="login-page-row">
          <div className="login-page-col-ilustracao">
            <LoginIlustracao />
          </div>
          <div className="login-page-col-form">
            <LoginForm onIdentificar={onIdentificar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
