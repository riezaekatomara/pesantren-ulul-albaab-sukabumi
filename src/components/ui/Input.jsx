import { AlertCircle } from 'lucide-react';

const Input = ({ 
  label, 
  error, 
  icon: Icon,
  type = 'text',
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        
        <input
          type={type}
          className={`
            w-full px-4 py-3 border rounded-lg
            ${Icon ? 'pl-11' : 'pl-4'}
            ${error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
            }
            transition-all duration-200
            text-gray-700 placeholder:text-gray-400
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;