import * as ReactDOM from "react-dom";
import * as React from "react";
import { PageContext } from "@yext/pages";


export const render = async (pageContext: PageContext<any>) => {
    const { Page, pageProps } = pageContext;

    const queryParams = parseQueryParams(window.location.href);
    const newProps = { ...pageProps, queryParams };
    console.log(newProps)

    ReactDOM.hydrate(
        <Page {...newProps} />,
        document.getElementById("reactele")
    );
};

function parseQueryParams(url) {
    const queryString = url.split('?')[1];
    if (!queryString) {
        return {};
    }

    const paramsArray = queryString.split('&');
    const queryParams = {};

    paramsArray.forEach(param => {
        const [key, value] = param.split('=');
        queryParams[key] = decodeURIComponent(value);
    });

    return queryParams;
}
