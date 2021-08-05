import { useEffect, useState } from 'react';

interface useScrollReturnType {
  x: number;
  y: number;
}
const useScroll = (): useScrollReturnType => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

export default useScroll;