import type { PropsWithChildren } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

export function Providers({ children }: PropsWithChildren) {
  return children;
}