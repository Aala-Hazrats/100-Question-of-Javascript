import { JSX, Suspense } from "react";
import Loader from "./loader";

const SuspenseWrapper = (
  Component: React.LazyExoticComponent<() => JSX.Element>,
) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export default SuspenseWrapper;
