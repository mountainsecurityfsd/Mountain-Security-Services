import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackSrcs?: string[];
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackSrcs = [],
  ...props
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Construct prioritized list of image sources to attempt
  const candidates = React.useMemo(() => {
    const list: string[] = [];
    if (src) list.push(src);
    fallbackSrcs.forEach((item) => {
      if (item && !list.includes(item)) {
        list.push(item);
      }
    });
    return list;
  }, [src, fallbackSrcs]);

  const currentSrc = candidates[candidateIndex] || src;

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
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
      src={currentSrc}
      alt={alt || 'Mountain Security Services'}
      className={className}
      onError={handleImageError}
      {...props}
    />
  );
};
