'use client'; //used for next.js client-side components

interface ContainerProps {
    children : React.ReactNode; //defining the type of props the component expects
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className="max-w-[2520px] mx-auto  xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
    </div>
  )
}

export default Container;
