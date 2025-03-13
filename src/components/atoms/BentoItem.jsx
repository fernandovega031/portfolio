const BentoItem = ({ children, className }) => {
    return <div className={`bento-item ${className}`}>{children}</div>;
  };
  
  export default BentoItem;