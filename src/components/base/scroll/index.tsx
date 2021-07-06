import BScroll from '@better-scroll/core';
import ObserveDOM from '@better-scroll/observe-dom';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import React, { useState, useRef, useEffect, RefObject } from 'react';

interface ScrollProps {
  options?: {
    click?: boolean;
    probeType?: number;
  };
  wrapperRef: HTMLDivElement;
  scrollPos: (pos: any) => {}
}

const Scroll: React.FC<ScrollProps> = ({ wrapperRef, options, children }) => {
  const [scroll, setScroll] = useState<BScrollConstructor>();

  BScroll.use(ObserveDOM);

  const initBScroll = () => {
    setScroll(
      new BScroll(wrapperRef, {
        observeDOM: true,
        ...options,
      })
      
    );
    // if (options.probeType > 0) {
    //   scroll?.on('scroll', (pos: any) => {
    //     scrollPos(pos)
    //   })
    // }
  };

  useEffect(() => {
    initBScroll()
    return () => {
      setScroll(undefined)
    }
  }, [])

  return <div className="rootRef">{children}</div>;
};

export default Scroll;
