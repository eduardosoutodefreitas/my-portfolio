interface ContactSocialProps {
  social: Social;
  align?: 'end' | 'start' | 'center';
}
const ContactSocial = ({ social, align = 'start' }: ContactSocialProps) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        align === 'start' ? 'justify-self-start' : 'justify-self-end'
      }`}
    >
      {social.icon}
      <a
        href={social.url}
        className="text-specialOrange text-xs lg:text-sm font-semibold"
      >
        {social.name}
      </a>
    </div>
  );
};

export default ContactSocial;
