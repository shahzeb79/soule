import React, { useState } from 'react';
import { X, Mail, Phone, MessageSquare, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SouleLogo } from './SouleLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Order & Delivery Support');
  const [orderNumber, setOrderNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedTicket = `SOULE-PK-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
    }, 700);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('Order & Delivery Support');
    setOrderNumber('');
    setMessage('');
    setIsSubmitted(false);
    setTicketId('');
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SouleLogo size={24} color="#0CB581" showText={true} />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-l border-neutral-200 pl-3">
              Contact Us
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-neutral-800">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0CB581] flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-neutral-900">Message Received!</h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-neutral-800">{name}</span>. Our customer support team has received your inquiry.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 max-w-xs mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Ticket Reference:</span>
                  <span className="font-mono font-bold text-neutral-900">{ticketId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Email:</span>
                  <span className="font-medium text-neutral-900 truncate max-w-[150px]">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Subject:</span>
                  <span className="font-medium text-neutral-900">{subject}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-neutral-200">
                  <span className="text-neutral-500">Expected Response:</span>
                  <span className="font-bold text-emerald-700">Within 2–4 Hours</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Form Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">Get in touch with us</h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Have a question about sizes, your order, or product advice? Fill out the form below or reach our team directly.
                </p>
              </div>

              {/* Quick Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <div>
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">Email</p>
                    <p className="font-semibold text-neutral-800 text-[11px]">support@soule.pk</p>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <div>
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">WhatsApp / Call</p>
                    <p className="font-semibold text-neutral-800 text-[11px]">+92 300 8923456</p>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#0CB581] shrink-0" />
                  <div>
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">Hours (PKT)</p>
                    <p className="font-semibold text-neutral-800 text-[11px]">Mon–Sat: 9AM – 9PM</p>
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ali Ahmed"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Phone Number (Pakistan)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                    >
                      <option value="Order & Delivery Support">Order & Delivery Status</option>
                      <option value="Shoe Size & Fit Advice">Shoe Size & Fit Advice</option>
                      <option value="Exchange or Return">Exchange or Return Request</option>
                      <option value="Product Details & Restock">Product Details & Restock</option>
                      <option value="Wholesale & Corporate Orders">Wholesale / Corporate Orders</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Order Number <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="e.g. SO-84920"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist you today? Please share any relevant details..."
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs focus:outline-none focus:border-black focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-neutral-400">
                    We typically respond within 2 to 4 business hours.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#0CB581]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
