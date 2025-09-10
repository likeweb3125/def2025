// 컴포넌트 import용
declare module "*.svg?component" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

// URL import용
declare module "*.svg" {
  const content: string;
  export default content;
}
