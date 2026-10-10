import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`bg-slate-800 text-slate-300 flex flex-col items-center justify-center p-4 text-center ${className}`}
        role="img"
        aria-label={alt || 'Mountain Security Services'}
      >
        <Shield className="w-8 h-8 text-[#0077b6] mb-1 opacity-70" />
        <span className="text-[11px] font-semibold text-slate-300">
          {fallbackText || alt || 'Mountain Security Services'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Mountain Security Services'}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
