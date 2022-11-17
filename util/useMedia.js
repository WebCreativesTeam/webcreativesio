import { useEffect, useState } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
   
    
    useEffect(() => {
        setMatches(window.innerWidth >= query)
        window.addEventListener('resize', () => setMatches(window.innerWidth >= query))
    }, [query]);
  
    return matches;
  }