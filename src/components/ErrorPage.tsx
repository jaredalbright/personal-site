import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // const error = useRouteError();
    // console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>This page doesn't exist</p>
        </div>
    )
}

export default ErrorPage