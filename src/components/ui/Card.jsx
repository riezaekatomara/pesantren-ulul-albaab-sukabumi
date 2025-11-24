const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '' 
}) => {
  
  const variants = {
    default: 'bg-white border border-gray-200',
    shadow: 'bg-white shadow-md',
    gradient: 'bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100',
    gold: 'bg-gradient-to-br from-gold-50 to-amber-50 border border-gold-200',
  };
  
  const hoverEffect = hover ? 'hover:shadow-lg hover:border-primary-300 transition-all duration-300' : '';
  
  return (
    <div className={`rounded-xl p-6 ${variants[variant]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export default Card;