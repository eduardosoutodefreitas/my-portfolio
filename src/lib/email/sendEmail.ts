import emailjs from '@emailjs/browser';
import { FormData } from '../validations/schema';
export const sendEmail = async (templateParams: FormData) => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY!);
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      templateParams,
    );

    console.log(result);
    return result.text;
  } catch (error) {
    console.log(error);
  }
};
