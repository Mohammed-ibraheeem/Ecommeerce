import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

function ShoppingPokicy() {
    return (
        <>
            <Meta title={"Shopping Pokicy"} />
            <BreadCrumd title=" Shopping Pokicy" />
            <Container class1="information-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="information">
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShoppingPokicy