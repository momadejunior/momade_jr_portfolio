export default function Footer(){
    return(
        <>
            <div className="container footer">
                <div className="row">
                        <div className="col-md-6">
                            <h1 className="footer-headline">ENTRE EM<br/>
                            CONTACTO</h1>
                        </div>

                        <div className="col-md-6">
                        <div className="input-group">
                                <input className="form-control b-input" placeholder="Nome"/>
                            </div>
                            <div className="input-group">
                            <input className="form-control b-input" placeholder="Email"/> <input className="form-control b-input"  placeholder="Contacto"/>
                            </div>
                            <div className="input-group">
                                <textarea className="form-control b-input"  placeholder="Mensagem"></textarea>
                            </div>

                            <div className="input-group">
                                <input className="form-control b-input"  placeholder="Email" type="submit" value="--->"/>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}