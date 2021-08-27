import { Fragment } from "react";
import Login from './pages/Login'
import Admin from "./pages/Admin"
import { Route, Switch, BrowserRouter } from "react-router-dom"

export default function App() {
    return (
        <Fragment>
            <BrowserRouter>
                {/* 引入路由 并包裹路由组件 */}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                </Switch>

            </BrowserRouter>

        </Fragment>
    )
}