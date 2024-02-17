import { Link } from "react-router-dom";

function BreadCrumd(props) {
    const { title } = props;
    return (
        <>
            <div className="breadcrumd mb-0 py-4">
                <div className="container-xx">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0">
                                <Link to="/" className="text-dark">
                                    Home &nbsp;
                                </Link>
                                / {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BreadCrumd;