export default function Contact() {
  return (
    <div className='contact-page'>
      <div className='container'>
        <h1>Contact Us</h1>
        <form>
          <div className='input-group'>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className='input-group'>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className='input-group'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className='submit-button'>Send Message</button>
        </form>
      </div>
    </div>
  );
}
