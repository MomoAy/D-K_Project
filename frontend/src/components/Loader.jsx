const Loader = () => {
  const styles = `
    @keyframes grow {
      0%, 100% {
        transform: scaleY(0.3);
      }
      50% {
        transform: scaleY(1);
      }
    }
    .animate-grow {
      animation: grow 1s ease-in-out infinite;
    }
    .animate-grow-delay-1 {
      animation: grow 1s ease-in-out -0.15s infinite;
    }
    .animate-grow-delay-2 {
      animation: grow 1s ease-in-out -0.30s infinite;
    }
    .animate-grow-delay-3 {
      animation: grow 1s ease-in-out -0.45s infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="flex items-center justify-between w-[35px] h-[31.5px]">
        <div className="w-[3.5px] h-full bg-black animate-grow"></div>
        <div className="w-[3.5px] h-full bg-black animate-grow-delay-1"></div>
        <div className="w-[3.5px] h-full bg-black animate-grow-delay-2"></div>
        <div className="w-[3.5px] h-full bg-black animate-grow-delay-3"></div>
      </div>
    </>
  );
};

export default Loader;