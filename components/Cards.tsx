import { imagenes } from "../arreglo"
export default function Cards() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                <div className="row px-4 py-4">
                {
                    imagenes.map(({title, description, image}, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="card text-white bg-dark">
                                <div className="px-4 py-4">
                                    <div className="circular--landscape mx-auto">
                                        <img src={image} alt="" className="card-img-top"/>
                                    </div>

                                    <div className="card-body text-center">
                                        <h3 className="fs-5 fw-bold">{title}</h3>
                                        <p className="texto text-center">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                </div>
                </div>
            </div>
        </div>
    )
}
