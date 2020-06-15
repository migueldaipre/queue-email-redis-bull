import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    attempts: 3,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Email <contato@migueldaipre.dev>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${user.name}, bem-vindo. :D`,
    });
  },
};
