import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

function PrivacyPolicy() {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumd title=" Privacy Policy" />
            <Container class1="information-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="information py-3">
                            <h3 className="title">The Standard Lorem Ipsum Passage</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sed itaque, fuga tempore exercitationem pariatur iure eveniet
                                nihil beatae. Doloribus voluptate beatae debitis sapiente et.
                                Et debitis dicta asperiores nam natus.
                            </p>
                            <h3 className="title">At Vero Eos Et Accusamus Et Iusto Odio Wignissimos</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sed itaque, fuga tempore exercitationem pariatur iure eveniet
                                nihil beatae. Doloribus voluptate beatae debitis sapiente et.
                                Et debitis dicta asperiores nam natus.
                            </p>
                            <h3 className="title">At Vero Eos Et Accusamus Et Iusto Odio Wignissimos</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sed itaque, fuga tempore exercitationem pariatur iure eveniet
                                nihil beatae. Doloribus voluptate beatae debitis sapiente et.
                                Et debitis dicta asperiores nam natus.
                            </p>
                            <h3 className="title">Integer Ultrices Laoreet Nunc In Gravida</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Sed itaque, fuga tempore exercitationem pariatur iure eveniet
                                nihil beatae. Doloribus voluptate beatae debitis sapiente et.
                                Et debitis dicta asperiores nam natus.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy