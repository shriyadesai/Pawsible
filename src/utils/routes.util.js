import { Suspense } from "react";

/**
 *
 * @param {Component} JSX Element
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns Lazy Loadable Component
 */
export const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
