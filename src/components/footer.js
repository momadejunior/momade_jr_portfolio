import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ow7nj7r',
            'template_8dyr5no',
            form.current,
            'OAXV_TY-Aek8NjEhS'
        ).then(
            (result) => {
                alert("✅ Mensagem enviada com sucesso!");
                console.log(result.text);
            },
            (error) => {
                alert("❌ Erro ao enviar. Tente novamente.");
                console.log(error.text);
            }
        );

        e.target.reset(); // limpa o formulário
    };

    return (
        <>
            <div className="container footer">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="footer-headline">
                            ENTRE EM<br />
                            CONTACTO
                        </h1>
                    </div>

                    <div className="col-md-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-control b-input"
                                    placeholder="Nome"
                                    required
                                />
                            </div>
                            <div className="input-group mb-2">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form-control b-input"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="text"
                                    name="user_contact"
                                    className="form-control b-input"
                                    placeholder="Contacto"
                                />
                            </div>
                            <div className="input-group mb-2">
                                <textarea
                                    name="message"
                                    className="form-control b-input"
                                    placeholder="Mensagem"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            <div className="input-group mb-2">
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-send"
                                    value="Enviar"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
