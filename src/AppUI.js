import { TodoProvider } from "./todoContext";
import App from "./App";
import React from "react";

function AppUI() {
    return(
        <>
        <TodoProvider>
            <App/>
        </TodoProvider>
        </>
    )
}

export {AppUI}