import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={""}>
        <button id="error-button">Voltar</button>
      </Link>
    </div>
  );
}
