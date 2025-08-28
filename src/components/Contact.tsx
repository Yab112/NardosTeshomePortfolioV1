"use client";
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import useActive from "@/hook/use-active";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailValidator, EmailRequestType } from "@/lib/validators/emailValidator";
import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import TitleStroke from "./ui/title-stroke";

const Contact = () => {
  const { ref } = useActive("Contact");
  const [isLoading, setIsloading] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmailRequestType>({
    resolver: zodResolver(EmailValidator),
    defaultValues: {
      text: "", email: ""
    },
  });
  
  async function onSubmit(data: EmailRequestType) {
    const payload: EmailRequestType = {
      text: data.text,
      email: data.email,
    }
    setIsloading(true)
    axios.post('/api/sendEmail', payload).
      then(res => toast.success('email send successfully')).
      catch((error) => toast.error('something went wrong'))
      .finally(() => {
        setIsloading(false)
        reset()
      })
  }
  
  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-0">
            Contact Me
          </h2>
          <TitleStroke />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-[500px] mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col gap-4">
              <div>
                <input
                  className="w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg py-3 px-4 transition-colors duration-300"
                  {...register('email')}
                  type="email"
                  placeholder="Your email"
                />
                {errors?.email && (
                  <p className='px-1 text-xs text-red-600 mt-1'>{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <textarea
                  {...register('text')}
                  placeholder="Your message"
                  rows={6}
                  className="w-full border border-gray-300 focus:border-gray-400 px-4 py-3 rounded-lg resize-none transition-colors duration-300"
                />
                {errors?.text && (
                  <p className='px-1 text-xs text-red-600 mt-1'>{errors.text.message}</p>
                )}
              </div>
              
              <div className="w-full flex justify-end">
                                 <button
                   type="submit"
                   disabled={isLoading}
                   className="flex items-center disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:scale-100 disabled:active:scale-100 cursor-pointer gap-2 px-6 py-3 text-sm bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-all duration-300"
                 >
                  Send Message
                  <BsSend className="text-sm" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
