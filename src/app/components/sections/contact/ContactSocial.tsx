const ContactSocial = (social: Social) => {
  return (
    <div className="flex items-center justify-center gap-2">
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
