import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimal loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto animate-pulse">
            <span className="text-xl font-bold text-white">CT</span>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-bold text-black tracking-widest">CHANDRA TEJA</div>
            <div className="text-xs text-black/50 tracking-wider">PRODUCT DESIGN</div>
          </div>
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}