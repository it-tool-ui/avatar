import type { VariantProps } from "class-variance-authority";
import { radiusVariants, wrapperVariants } from "./avatar.helpers";

export interface AvatarProps
  extends VariantProps<typeof wrapperVariants>,
    VariantProps<typeof radiusVariants> {
  src?: string;
  name: string;
  bordered?: boolean;
  disabled?: boolean;
  randomFallbackColor?: boolean;
}
