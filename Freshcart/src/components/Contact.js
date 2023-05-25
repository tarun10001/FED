import styled from "styled-components";

const Contact = () => {
  const Contact = styled.section`
    padding: 2rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 2rem;
      .contact-form {
        max-width: 30rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input {
            padding: 12px;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            width: 12rem;
            height: 3rem;
            color: #fff;
            background-color: steelblue;
            border: none;
            &:hover {
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Contact>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d28478.796307733177!2d75.77306776668686!3d26.844737522011247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396db5dfd5bea115%3A0xf75ae25f7e9efe4d!2sgenpact%20jaipur!3m2!1d26.8504112!2d75.8042747!5e0!3m2!1sen!2sin!4v1672559941422!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              placeholder="Enter you message"></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Contact>
  );
};

export default Contact;