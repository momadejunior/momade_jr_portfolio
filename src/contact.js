import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(){

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

    return(
        <>
            <div className="container footer">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h2 className="footer-headline text-center heading-color">
                            Let’s Work Together
                        </h2>
                        <p className="text-center heading-color">Conte-me mais sobre seu projeto</p>
                    </div>

                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-control c-input"
                                    placeholder="Nome"
                                    required
                                />
                            </div>
                            
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form-control c-input"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="text"
                                    name="user_contact"
                                    className="form-control c-input"
                                    placeholder="+258 84 946 0702"
                                />
                            
                           
                                <textarea
                                    name="message"
                                    className="form-control c-input"
                                    placeholder="Mensagem"
                                    rows={5}
                                    required
                                ></textarea>
                            

                         
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-send-2"
                                    value="Let's Talk"
                                />
                           
                        </form>
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}