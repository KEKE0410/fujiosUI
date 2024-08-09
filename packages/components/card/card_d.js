export const Card = ({ children,disable }) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50 pointer-events-none";
  }
  return (
    <>
      <div
        className={`rounded-xl shadow-md border-2 border-gray-100 bg-white ${disable_s}`}
      >
        {children}
      </div>
    </>
  );
};

export const CardHeader = ({ children, className }) => {
  return <div className={`px-5 pt-5 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-bold">{children}</h2>;
};

export const CardDescription = ({ children }) => {
  return <p className="text-sm opacity-50">{children}</p>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-5 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
};
