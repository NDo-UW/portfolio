import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pnvnqjb', 'template_5x248e4', form.current, '4bcMuBlN5E64YWLur')
            .then((result) => {
                console.log(result.text);
                alert('Message sent!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
            e.target.reset();
    };

    return (
        <div id='contact-section' className="isolate px-6 py-8 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="mx-auto mt-8 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-base font-bold leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="from_name"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-base font-bold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="from_email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-base font-bold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 no-resize overflow-hidden"
                                defaultValue={''}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#172131] px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[#0f1823] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172131]"
                    >
                        Let's Talk
                    </button>
                </div>
            </form>
        </div>
    );
}