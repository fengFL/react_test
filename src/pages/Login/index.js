import { Fragment } from "react"
import Logo from "../../assets/images/logo.png"
import { Grid, TextField, Button } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import "./index.css"
function Login() {
    return (
        <Fragment>
            <header className="header">
                <img src={Logo} alt="logo" />
                <p>登录界面</p>
            </header>
            <section className="form">
                <form>
                    <Grid container spacing={1} alignItems="flex-end" justifyContent="center">
                        <Grid item xs={1}>
                            <AccountCircle />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ width: "80%" }} id="input-with-icon-grid" label="输入用户名" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end" justifyContent="center">
                        <Grid item xs={1} >
                            <VpnKeyIcon />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField style={{ width: "80%" }} type="password" id="input-with-icon-grid" label="请输入密码" />
                        </Grid>
                    </Grid>

                    <Button className="button" variant="outlined" color="primary">
                        登录
                    </Button>


                </form>
            </section>
        </Fragment >
    )
}
export default Login