import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from '../components/CustomInput';

function Resetpassword() {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumd title=" Reset Password" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                <CustomInput
                                    type="password"
                                    name='confpassword'
                                    placeholder='confirm Password'
                                />
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className='button border-0'>Ok</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Resetpassword