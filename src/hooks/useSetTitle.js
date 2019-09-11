import { useEffect } from 'react';

// didn't want to bring in react-helmet just to set the title so use a lil custom hook
function useSetTitle(title) {
  useEffect(() => {
    document.title = `Awesome Axes  | ${title}`;
  }, [title]);
}

export default useSetTitle;
