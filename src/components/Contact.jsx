export default function Contact(){
  return (
    <section id="contact" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Fill the form below or email me at <a href="mailto:lamaarun2001@gmail.com" className="text-blue-500">lamaarun2001@gmail.com</a></p>
      <form name="contact" method="POST" data-netlify="true" className="grid gap-4 max-w-lg">
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" type="text" placeholder="Your name" required className="border rounded p-2 dark:bg-gray-800" />
        <input name="email" type="email" placeholder="Your email" required className="border rounded p-2 dark:bg-gray-800" />
        <textarea name="message" rows="5" placeholder="Message" required className="border rounded p-2 dark:bg-gray-800"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  )
}
