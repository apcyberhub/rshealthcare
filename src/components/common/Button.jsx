import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'gold', // 'gold' | 'outline' | 'whatsapp' | 'call' | 'subtle'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-bold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-xl gap-2.5',
  }[size] || 'px-5 py-2.5 text-sm font-bold rounded-xl gap-2';

  const variantClasses = {
    gold: 'btn-gold inline-flex items-center justify-center text-center',
    outline: 'btn-gold-outline inline-flex items-center justify-center text-center',
    whatsapp: 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold border border-emerald-400/40 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center',
    call: 'bg-gradient-to-r from-[#D4A72C] to-[#946B08] text-black font-extrabold border border-[#FFE6A0] shadow-gold-sm hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center',
    subtle: 'bg-[#171717] hover:bg-[#222222] text-[#E0E0E0] hover:text-white border border-white/10 hover:border-gold/40 transition-all duration-300 inline-flex items-center justify-center',
  }[variant] || 'btn-gold inline-flex items-center justify-center';

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${sizeClasses} ${variantClasses} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? '_blank' : undefined} 
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${sizeClasses} ${variantClasses} ${className}`} 
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
